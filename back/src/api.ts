import { json, Router } from "express";
import { RAMArticlesService } from "./services/RAMArticles.service";
import { Article } from "./interfaces/Articles";

const app = Router();
const articleService = new RAMArticlesService();

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
  (async () => {
    try {
      const articles = await articleService.retrieveAll();
      res.json(articles);
    } catch (err) {
      console.log("err: ", err);
      res.status(500).end();
    }
  })();
});

app.post("/articles", (req, res) => {
  (async () => {
    try {
      const article: Article = req.body;
      console.log("article: ", article);
      const addedArticle = await articleService.add(article);

      res.status(201).json(addedArticle);
    } catch (err) {
      console.log("err: ", err);
      res.status(500).end();
    }
  })();
});

app.delete("/articles", (req, res) => {
  (async () => {
    try {
      const ids: string[] = req.body;
      console.log("ids: ", ids);

      await articleService.remove(ids);

      res.status(204).end();
    } catch (err) {
      console.log("err: ", err);
      res.status(500).end();
    }
  })();
});
export const api = app;
