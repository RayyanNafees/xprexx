const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Wetin dey sup for boys");
});

app.listen(port, () => {
  console.log(`Example app listening at https://xprexx.herokuapp.com:${port}`);
});
