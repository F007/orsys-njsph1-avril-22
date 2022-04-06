import express from "express";
import serveIndex from "serve-index"; //gestion des repertoires
import { api } from "./api";

console.log("About the server");

const app = express();
const port = +process.env.PORT || 3000;
const wwwDir = "./public";

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use("/api", api); //router

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
