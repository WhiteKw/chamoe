const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const spawn = require("child_process").spawn;

let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

app.use(cors(corsOptions));

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

app.get("/hello", function (req, res) {
  // res.writeHead(200, {"Content-Type": "application/json; charset=UTF-8"});
  const result = spawn("python", ["./python/lyric_crawling.py", "사건의 지평선"]);

  result.stdout.on("data", data => {
    res.send(data.toString());
  });

  result.stderr.on("data", data => {
    return res.send(data.toString());
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
