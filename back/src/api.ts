import { Router } from "express";
import { Articles } from "./interfaces/Articles";
const app = Router();

const articles: Articles[] = [
  {
    id: 12,
    name: "marteau",
    price: 11,
    qty: 10,
  },
  {
    id: 13,
    name: "clou",
    price: 55,
    qty: 10,
  },
  {
    id: 14,
    name: "agraff",
    price: 96,
    qty: 10,
  },
];

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

export const api = app;
