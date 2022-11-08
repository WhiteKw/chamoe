const express = require("express");
const router = express.Router();
const jwt = require("../utils/jwt");
const redisClient = require("../utils/redis");
require("dotenv").config();

router.post("/", (req, res) => {
  if (true) {
    const user = {
      id: req.body.userid,
    };

    console.log(req.body.userid);

    // Access Token과 Refresh Token 발급
    const accessToken = jwt.sign(user);
    const refreshToken = jwt.refresh();

    // 발급한 Refresh Token을 redis에 저장한다.
    // key : user의 id
    redisClient.setVal(user.id, refreshToken);

    res.status(200).send({
      ok: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } else {
    res.status(401).send({
      ok: false,
      message: "password is incorrect",
    });
  }
});

module.exports = router;
