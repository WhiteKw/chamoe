const redis = require("redis");
require("dotenv").config();
const redisClient = redis.createClient();

module.exports = redisClient;
