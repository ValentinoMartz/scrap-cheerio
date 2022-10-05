const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;
const cors = require("cors");

const app = express();
app.use(cors());

const url = "https://www.theguardian.com/uk";

//app.METHOD(PATH, HANDLER);

app.get("/", async (req, res) => {
  res.json("This is my webscraper");
});

app.get("/results", async (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articules = [];
      $(".fc-item__title", html).each(function () {
        const title = $(this).text();
        const url = $(this).find("a").attr("href");
        articules.push({
          title,
          url,
        });
      });

      res.json(articules);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

//https://www.youtube.com/watch?v=1wXYg8Eslnc
