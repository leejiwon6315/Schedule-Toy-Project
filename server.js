const express = require("express");
const bodyParder = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParder.json());
app.use(bodyParder.urlencoded({ extended: true }));

app.get("/api/schedule-data", (req, res) => {
  res.send([
    {
      id: 1,
      name: "test1",
      place: "진리관",
    },
    {
      id: 2,
      name: "test2",
      place: "정보대",
    },
  ]);
});

app.listen(port, () => console.log(`${port}번 포트에서 실행중`));
