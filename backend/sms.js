const md5 = require("md5");
const axios = require("axios");

const request = axios.create({
  timeout: 20000,
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => console.log(error)
);
request.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status >= 200 && status < 300) {
      return data;
    }
    return Promise.reject(new Error(response));
  },
  (error) => console.log(error)
);

const appid = 959;
const qversion = "1.0.0";
const country_code = 86;

async function getCodeCookie() {
  var ts = Date.now();
  var sub_cmd = 1;
  var gsign = md5(
    `${appid}${qversion}${ts}36${sub_cmd}sb2cwlYyaCSN1KUv5RHG3tmqxfEb8NKN`
  );
  var d = `client_ver=1.0.0&gsign=${gsign}&appid=${appid}&return_page=https%3A%2F%2Fcrpl.jd.com%2Fn%2Fmine%3FpartnerId%3DWBTF0KYY%26ADTAG%3Dkyy_mrqd%26token%3D&cmd=36&sdk_ver=1.0.0&sub_cmd=${sub_cmd}&qversion=${qversion}&ts=${ts}`;
  var l = d.length;
  const { data } = await request.post(
    "https://qapplogin.m.jd.com/cgi-bin/qapp/quick",
    d,
    {
      headers: {
        Host: "qapplogin.m.jd.com",
        cookie: "",
        "user-agent":
          'Mozilla/5.0 (Linux; Android 10; V1838T Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.87 mobile Safari/537.36 hap/1.9/vivo com.vivo.hybrid/1.9.6.302 com.jd.crplandroidhap/1.0.3 ({"packageName":"com.vivo.hybrid","type":"deeplink","extra":{}})',
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        "content-length": l.toString(),
        "accept-encoding": "",
      },
    }
  );
  return data;
}

// 发送验证码
async function sendCode(cookie, gsalt, mobile) {
  var ts = Date.now();
  var sub_cmd = 2;
  var gsign = md5(`${appid}${qversion}${ts}36${sub_cmd}${gsalt}`);
  var sign = md5(
    `${appid}${qversion}${country_code}${mobile}4dtyyzKF3w6o54fJZnmeW3bVHl0$PbXj`
  );
  var d = `country_code=${country_code}&client_ver=1.0.0&gsign=${gsign}&appid=${appid}&mobile=${mobile}&sign=${sign}&cmd=36&sub_cmd=${sub_cmd}&qversion=${qversion}&ts=${ts}`;
  var l = d.length;
  return await request.post(
    "https://qapplogin.m.jd.com/cgi-bin/qapp/quick",
    d,
    {
      headers: {
        Host: "qapplogin.m.jd.com",
        cookie: cookie,
        "user-agent":
          'Mozilla/5.0 (Linux; Android 10; V1838T Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.87 mobile Safari/537.36 hap/1.9/vivo com.vivo.hybrid/1.9.6.302 com.jd.crplandroidhap/1.0.3 ({"packageName":"com.vivo.hybrid","type":"deeplink","extra":{}})',
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        "content-length": l.toString(),
        "accept-encoding": "",
      },
    }
  );
}

// 验证码登录
async function login(mobile, smscode, cookie) {
  const ts = Date.now();
  const sub_cmd = 3;
  const gsalt = cookie?.match(/gsalt=.*?(?<=;)/);
  const gsign = md5(`${appid}${qversion}${ts}36${sub_cmd}${gsalt}`);
  const d = `country_code=${country_code}&client_ver=1.0.0&gsign=${gsign}&smscode=${smscode}&appid=${appid}&mobile=${mobile}&cmd=36&sub_cmd=${sub_cmd}&qversion=${qversion}&ts=${ts}`;
  const l = d.length;

  return await request.post(
    "https://qapplogin.m.jd.com/cgi-bin/qapp/quick",
    d,
    {
      headers: {
        Host: "qapplogin.m.jd.com",
        cookie: cookie,
        "user-agent":
          'Mozilla/5.0 (Linux; Android 10; V1838T Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/98.0.4758.87 mobile Safari/537.36 hap/1.9/vivo com.vivo.hybrid/1.9.6.302 com.jd.crplandroidhap/1.0.3 ({"packageName":"com.vivo.hybrid","type":"deeplink","extra":{}})',
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
        "content-length": l.toString(),
        "accept-encoding": "",
      },
    }
  );
}

module.exports = {
  getCodeCookie,
  sendCode,
  login,
};
