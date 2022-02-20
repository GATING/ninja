"use strict";

const Koa = require("koa");
const cors = require("@koa/cors");
const Router = require("@koa/router");
const body = require("koa-body");
const serve = require("koa-static");
const User = require("./user");
const packageJson = require("./package.json");

const { getCodeCookie, sendCode, login } = require("./sms");

// Create express instance
const app = new Koa();
const router = new Router();

const handler = async (ctx, next) => {
  try {
    await next();
    if (ctx.body?.data.message) {
      ctx.body.message = ctx.body.data.message;
      ctx.body.data.message = undefined;
    }
  } catch (err) {
    console.log(err);
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: err.status || err.statusCode || 500,
      message: err.message,
    };
  }
};

app.use(serve("static"));
app.use(cors());
app.use(handler);
app.use(router.routes()).use(router.allowedMethods());

router.get("/api/status", (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      version: packageJson.version,
    },
    message: "Ninja is already.",
  };
});

router.get("/api/info", async (ctx) => {
  const data = await User.getPoolInfo();
  debugger;
  ctx.body = { data };
});

router.get("/api/qrcode", async (ctx) => {
  const user = new User({});
  await user.getQRConfig();
  ctx.body = {
    data: {
      token: user.token,
      okl_token: user.okl_token,
      cookies: user.cookies,
      QRCode: user.QRCode,
      ua: user.ua,
    },
  };
});

router.post("/api/check", body(), async (ctx) => {
  const body = ctx.request.body;
  const user = new User(body);
  const data = await user.checkQRLogin();
  ctx.body = { data };
});

router.post("/api/cklogin", body(), async (ctx) => {
  const body = ctx.request.body;
  const user = new User(body);
  const data = await user.CKLogin();
  ctx.body = { data };
});

router.get("/api/userinfo", async (ctx) => {
  const query = ctx.query;
  const eid = query.eid;
  const user = new User({ eid });
  const data = await user.getUserInfoByEid();
  ctx.body = { data };
});

router.post("/api/delaccount", body(), async (ctx) => {
  const body = ctx.request.body;
  const eid = body.eid;
  const user = new User({ eid });
  const data = await user.delUserByEid();
  ctx.body = { data };
});

router.post("/api/update/remark", body(), async (ctx) => {
  const body = ctx.request.body;
  const eid = body.eid;
  const remark = body.remark;
  const user = new User({ eid, remark });
  const data = await user.updateRemark();
  ctx.body = { data };
});

router.get("/api/users", async (ctx) => {
  if (ctx.host.startsWith("localhost")) {
    const data = await User.getUsers();
    ctx.body = { data };
  } else {
    ctx.body = {
      code: 401,
      message: "该接口仅能通过 localhost 访问",
    };
  }
});

///////////////////////////////////////////////

router.post("/api/WSCKLogin", body(), async (ctx) => {
  const body = ctx.request.body;
  const user = new User(body);
  const data = await user.WSCKLogin();
  ctx.body = { data };
});

router.get("/api/WSCKUserinfo", async (ctx) => {
  const query = ctx.query;
  const wseid = query.wseid;
  const user = new User({ wseid });
  const data = await user.getWSCKUserInfoByEid();
  ctx.body = { data };
});

router.post("/api/WSCKDelaccount", body(), async (ctx) => {
  const body = ctx.request.body;
  const wseid = body.wseid;
  const user = new User({ wseid });
  const data = await user.delWSCKUserByEid();
  ctx.body = { data };
});

router.post("/api/updateWSCK/remark", body(), async (ctx) => {
  const body = ctx.request.body;
  const wseid = body.wseid;
  const remark = body.remark;
  const user = new User({ wseid, remark });
  const data = await user.updateWSCKRemark();
  ctx.body = { data };
});

router.post("/api/code", body(), async (ctx) => {
  const { mobile } = ctx.request.body;
  if (/^1\d{10}$/.test(mobile)) {
    // 获取验证码ck
    const { guid, gsalt, rsa_modulus, lsid } = await getCodeCookie();
    const ck = `guid=${guid};  lsid=${lsid};  gsalt=${gsalt};  rsa_modulus=${rsa_modulus};`;
    const { err_msg } = await sendCode(ck, gsalt, mobile);
    if (err_msg) {
      ctx.body = {
        code: 999,
        data: {},
        message: `验证码发送失败 ${err_msg}`,
      };
    } else {
      ctx.body = {
        code: 200,
        data: ck,
        message: `验证码发送成功`,
      };
    }
  } else {
    ctx.body = {
      code: 998,
      data: {},
      message: `请输入正确的手机号`,
    };
  }
});

router.post("/api/login", body(), async (ctx) => {
  const { mobile, smscode, ck } = ctx.request.body;
  if (!/^1\d{10}$/.test(mobile)) {
    ctx.body = {
      code: 998,
      data: {},
      message: `请输入正确的手机号`,
    };
    return;
  }
  if (!smscode?.trim()) {
    ctx.body = {
      code: 998,
      data: {},
      message: `验证码不能为空`,
    };
    return;
  }

  const {
    err_msg,
    data: { pt_key, pt_pin },
  } = await login(mobile, smscode, ck);

  if (err_msg) {
    ctx.body = {
      code: 999,
      data: {},
      message: `登录失败 ${err_msg}`,
    };
  } else {
    
    const user = new User({ pt_key, pt_pin });
    const data = await user.CKLogin();
    ctx.body = { data };
  }
});

///////////////////////////////////////////////

const port = process.env.NINJA_PORT || 5701;
console.log("Start Ninja success! listening port: " + port);
app.listen(port);
