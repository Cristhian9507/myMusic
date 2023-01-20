const redis = require("redis");

redisClient = redis.createClient({
  socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
  }
});
console.log(redis.host)
redisClient.on("error", (error) => console.error(`Error : ${error} y ${redisClient.host}`));

module.exports = { redisClient };