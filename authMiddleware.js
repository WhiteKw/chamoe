const { verify } = require("./utils/jwt");

export const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    // header에서 Access Token을 가져온다.
    const token = req.headers.authorization.split("Bearer ")[1];

    // Token을 검증한다.
    const result = verify(token);

    // Token이 검증되었으면 req에 값을 세팅하고, 다음 콜백함수로 간다.
    if (result.ok) {
      req.id = result.id;
      next();
    } else {
      res.status(401).send({
        ok: false,
        message: result.message, // jwt가 만료되었다면 메세지는 'jwt expired' 이다.
      });
    }
  }
};

module.exports = authMiddleware;
