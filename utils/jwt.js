const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const redisClient = require("./redis");
require("dotenv").config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

module.exports = {
  // Access Token 발급
  sign: (user) => {
    const payload = {
      id: user.id,
    };

    return jwt.sign(payload, accessTokenSecret, {
      algorithm: "HS256",
      expiresIn: "1h",
    });
  },
  // Access Token 검증
  verify: (token) => {
    let decoded = null;

    try {
      decoded = jwt.verify(token, accessTokenSecret);

      return {
        ok: true,
        id: decoded.id,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
  // Refresh Token 발급
  // Refresh Token은 payload 없이 발급
  refresh: () => {
    return jwt.sign({}, refreshTokenSecret, {
      algorithm: "HS256",
      expiresIn: "14d",
    });
  },
  // Refresh Token 검증
  refreshVerify: async (token, userId) => {
    /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
       promisify를 이용하여 promise를 반환하게 해준다. */
    const getAsync = promisify(redisClient.get).bind(redisClient);

    try {
      // Refresh Token 가져오기
      const data = await getAsync(userId);

      if (token === data) {
        try {
          jwt.verify(token, refreshTokenSecret);
          return true;
        } catch (err) {
          return false;
        }
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};
