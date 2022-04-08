import { Article } from "../interfaces/articles";
import { v4 as uuidv4 } from "uuid";

let articles: Article[] = [
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

export class RAMArticlesService {
  add(article: Article): Article {
    const addArticle = { ...article };
    addArticle.id = uuidv4();
    articles.push(addArticle);
    return article;
  }

  remove(ids: string[]) {
    articles = articles.filter((a) => !ids.includes(a.id));
  }

  retrieveAll() {
    return articles;
  }
}
