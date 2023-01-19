const redis = require("redis");

redisClient = redis.createClient();
redisClient.on("error", (error) => console.error(`Error : ${error}`));

module.exports = { redisClient };