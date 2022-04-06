import express from "express";
import serveIndex from "serve-index"; //gestion des repertoires

console.log("About the server");

const app = express();
const port = +process.env.PORT || 3000;
const wwwDir = "./public";

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.get("/api/crash", (req, res, next) => {
  (async () => {
    throw new Error("oups... crash....");
  })();
});

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
