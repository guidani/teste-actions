const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("olá");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
