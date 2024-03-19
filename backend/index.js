// app.js

const express = require("express");
const bodyParser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
// const redis = require("redis");
const rateLimit = require("express-rate-limit");
// const { promisify } = require("util");

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;
// const client = redis.createClient({
//   url: "redis://192.168.1.201:6379",
// });
// client.connect();
// const GET_ASYNC = promisify(client.get).bind(client);
// const SET_ASYNC = promisify(client.set).bind(client);
app.use(cors());
app.use(bodyParser.json());
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
});

app.use(limiter);

app.post("/submissions", async (req, res) => {
  try {
    console.log(req.body);
    const submission = await prisma.submission.create({
      data: req.body,
    });
    res.status(201).json(submission);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Failed to add submission" });
  }
});

app.get("/submissions", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  try {
    // const cachedData = await GET_ASYNC(`page:${page}`);
    // if (cachedData) {
    //   return res.json(JSON.parse(cachedData));
    // }

    const submissions = await prisma.submission.findMany({
      skip: offset,
      take: limit,
    });
    // await SET_ASYNC("page:2", JSON.stringify(submissions), "EX", 60);
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
