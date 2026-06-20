import { createClient } from "redis"

const redisUrl = process.env.REDIS_URL;

export const redisclient = createClient({
  url: redisUrl
});

redisclient.on("error", function (err) {
  console.error("Redis client connection error:", err);
});

// Replace 'await redisclient.connect()' with this safe check:
if (!redisclient.isOpen) {
  redisclient.connect().catch((err) => {
    console.error("Failed to connect to Redis:", err);
  });
}
