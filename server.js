const express = require("express");
const path = require("path");
const app = express();

const loginRouter = require("./routes/login");
const userRouter = require("./routes/user");
const refreshRouter = require("./utils/refresh");

const redisClient = require("./utils/redis");

app.listen(8081, function () {
  console.log("listening on 8081");
  redisClient.run();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use("/login", loginRouter);
app.use("/refresh", refreshRouter);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
