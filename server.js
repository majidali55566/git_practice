const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  res.json({ message: "Hello world!" });
});
app.get("/products", (req, res, next) => {
  res.json({ message: "Products" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
