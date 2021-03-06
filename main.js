const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "public/index.html");
});

app.get("/videoInfo", async function (request, response) {
  const videoURL = request.query.videoURL;
  const info = await ytdl.getInfo(videoURL);
  response.status(200).json(info);
});

app.listen(port);
