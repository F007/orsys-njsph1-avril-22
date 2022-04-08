import { Article } from "../interfaces/articles";
import { MongoClient, Db, Document, ObjectId } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/gestion-stock";
//marche pas avec localhost
const convert = (d: Document) => {
  const result = { ...d };
  result.id = result._id.toHexString();
  delete result._id;
  return result;
};

let db: Db;

const init = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("connection a mmongo DB");
    db = client.db();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

init();

export class MongoArticleService {
  async add(article: Article): Promise<Article> {
    const result = await db.collection("articles").insertOne({ ...article });
    const addedArticle = { ...article };
    addedArticle.id = result.insertedId.toHexString();
    console.log("result:", result);
    return addedArticle;
  }

  async remove(ids: string[]) {
    const objects = ids.map((id) => new ObjectId(id));
    await db.collection("articles").deleteMany({ _id: { $in: objects } });
  }

  async retrieveAll() {
    const documents = await db.collection("articles").find({}).toArray();
    const articles = documents.map((d) => convert(d));
    return articles;
  }
}
