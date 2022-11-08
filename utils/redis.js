const redis = require("redis");

const redisClient = redis.createClient();

module.exports = {
    run: async () => {
        await redisClient.connect();
    },
    setVal: async (key, value) => {
        await redisClient.set(key, value);
    },
    getVal: async (key) => {
        return await redisClient.get(key);
    }
}