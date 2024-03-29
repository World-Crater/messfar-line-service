require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/lineWebhook", async function (req, res) {
  console.log("get request body: " + JSON.stringify(req.body));
  switch (req?.body?.events?.[0]?.message?.type) {
    case "text":
      controller.textController(req, res);
      break;
    case "image":
      controller.imageController(req, res);
      break;
  }
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
