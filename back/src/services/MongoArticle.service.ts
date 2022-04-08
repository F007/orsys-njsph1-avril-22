import { Article } from "../interfaces/articles";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const JSON_FILE = "data/articles.json";

let articles: Article[] = [];

const init = () => {
  try {
    const str = fs.readFileSync(JSON_FILE, { encoding: "utf-8" });
    articles = JSON.parse(str);
  } catch (err) {
    console.log(err);
    articles = [{ id: "12", name: "marteau", price: 11, qty: 10 }];
  }
};

init();

const save = async () => {
  fs.promises.writeFile(JSON_FILE, JSON.stringify(articles));
};

export class MongoArticleService {
  async add(article: Article): Promise<Article> {
    const addArticle = { ...article };
    addArticle.id = uuidv4();
    articles.push(addArticle);
    return article;
  }

  async remove(ids: string[]) {
    articles = articles.filter((a) => !ids.includes(a.id));
  }

  retrieveAll() {
    return articles;
  }
}
