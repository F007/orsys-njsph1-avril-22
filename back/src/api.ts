import { json, Router } from "express";
import { Articles } from "./interfaces/Articles";
import { v4 as uuidv4 } from "uuid";

const app = Router();

const articles: Articles[] = [
  {
    id: "12",
    name: "marteau",
    price: 11,
    qty: 10,
  },
  {
    id: "13",
    name: "clou",
    price: 55,
    qty: 10,
  },
  {
    id: "14",
    name: "agraff",
    price: 96,
    qty: 10,
  },
];
app.use(json());

app.get("/crash", (req, res, next) => {
  (async () => {
    throw new Error("oups... crash....");
  })();
});

app.get("/date", (req, res, next) => {
  res.json({
    date: new Date(),
  });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.post("/articles", (req, res) => {
  (async () => {
    try {
      const article: Articles = req.body;
      console.log("article: ", article);
      article.id = uuidv4();
      articles.push(article);
      res.status(201).json(article);
    } catch (err) {
      console.log("err: ", err);
      res.status(500).end();
    }
  })();
});

export const api = app;
