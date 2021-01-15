const express = require("express");
const bodyParder = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParder.json());
app.use(bodyParder.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  res.send({ message: "test" });
});

app.listen(port, () => console.log(`${port}번 포트에서 실행중`));
