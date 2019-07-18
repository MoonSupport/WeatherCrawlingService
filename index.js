const express = require("express");
const crawler = require("./utils/crawler");
const app = express();
const WeatherCrawler = require("./utils/excelMaker");

let crawlerCase = null;

app.use(express.json());

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.post("/crawler", async (req, res) => {
  const requestData = req.body;
  const answer = await crawler.crawlingWeatherData(requestData[0]);

  res.send(answer);
});
app.get("/excel", async (req, res) => {
  makeReport(req, res);
});
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

function makeReport(req, res) {
  crawlerCase = new WeatherCrawler();
  const testCase = [
    "",
    "-1.3",
    "-4.0",
    "-0.2",
    "15.6",
    "20.4",
    "23.8",
    "21.9",
    "33.6",
    "25.5",
    "15.4",
    "8.4",
    "5.5",
    "",
    "-1.8",
    "-2.4",
    "-0.7",
    "18.4",
    "15.1",
    "23.4",
    "22.6",
    "33.7",
    "25.1",
    "15.9",
    "10.6",
    "8.2",
    "",
    "-4.7",
    "-7.3",
    "7.9",
    "17.8",
    "11.2",
    "24.0",
    "27.4",
    "33.1",
    "23.3",
    "17.3",
    "11.2",
    "11.5",
    "",
    "-4.7",
    "-9.5",
    "9.8",
    "13.4",
    "14.1",
    "22.6",
    "27.3",
    "31.1",
    "23.2",
    "19.3",
    "11.6",
    "6.7",
    "",
    "-3.0",
    "-9.4",
    "5.5",
    "7.6",
    "18.3",
    "23.7",
    "25.3",
    "30.0",
    "24.0",
    "16.9",
    "11.9",
    "0.0",
    "",
    "-2.8",
    "-10.1",
    "4.5",
    "5.8",
    "16.6",
    "23.0",
    "23.9",
    "30.5",
    "24.1",
    "18.0",
    "12.2",
    "2.4",
    "",
    "-0.8",
    "-8.0",
    "6.4",
    "4.2",
    "19.2",
    "22.2",
    "23.7",
    "30.5",
    "22.0",
    "16.4",
    "12.8",
    "-7.3",
    "",
    "1.3",
    "-4.4",
    "4.6",
    "3.9",
    "17.5",
    "21.9",
    "23.3",
    "31.0",
    "21.7",
    "14.8",
    "11.8",
    "-8.3",
    "",
    "-4.2",
    "0.4",
    "4.5",
    "7.9",
    "15.7",
    "23.7",
    "20.8",
    "28.8",
    "22.2",
    "15.3",
    "12.1",
    "-7.2",
    "1",
    "-7.5",
    "-0.5",
    "4.6",
    "15.1",
    "15.4",
    "21.3",
    "23.7",
    "30.7",
    "22.9",
    "12.0",
    "11.9",
    "-2.5",
    "1",
    "-11.1",
    "-6.1",
    "6.4",
    "12.6",
    "16.1",
    "20.2",
    "26.8",
    "31.0",
    "21.6",
    "9.7",
    "8.1",
    "0.2",
    "1",
    "-10.2",
    "-5.8",
    "8.0",
    "13.3",
    "14.2",
    "21.3",
    "26.6",
    "30.6",
    "22.8",
    "10.9",
    "8.1",
    "-1.9",
    "1",
    "-4.4",
    "-0.8",
    "12.4",
    "14.6",
    "15.8",
    "22.0",
    "27.3",
    "30.5",
    "23.5",
    "12.5",
    "8.8",
    "-2.2",
    "1",
    "0.6",
    "3.5",
    "17.0",
    "9.0",
    "18.2",
    "21.6",
    "27.9",
    "31.7",
    "23.5",
    "13.2",
    "9.8",
    "-4.4",
    "1",
    "4.7",
    "-0.7",
    "12.4",
    "9.5",
    "23.2",
    "21.7",
    "28.3",
    "31.7",
    "23.3",
    "15.2",
    "9.7",
    "-2.4",
    "1",
    "3.5",
    "-1.1",
    "7.1",
    "11.6",
    "22.3",
    "22.5",
    "28.7",
    "29.9",
    "22.2",
    "14.5",
    "8.8",
    "0.0",
    "1",
    "4.5",
    "-3.0",
    "6.6",
    "12.9",
    "20.9",
    "22.8",
    "28.1",
    "27.2",
    "22.3",
    "12.4",
    "4.9",
    "1.6",
    "1",
    "2.1",
    "-0.4",
    "8.2",
    "12.4",
    "16.3",
    "24.8",
    "28.2",
    "26.7",
    "22.0",
    "12.7",
    "6.1",
    "2.6",
    "1",
    "1.0",
    "1.8",
    "8.0",
    "14.0",
    "17.6",
    "22.4",
    "28.7",
    "28.2",
    "22.1",
    "13.1",
    "6.5",
    "4.0",
    "2",
    "2.2",
    "0.9",
    "4.7",
    "18.4",
    "17.0",
    "22.7",
    "29.5",
    "29.1",
    "19.0",
    "13.4",
    "6.5",
    "3.4",
    "2",
    "0.4",
    "-0.9",
    "2.1",
    "18.7",
    "17.8",
    "23.7",
    "30.6",
    "26.6",
    "19.4",
    "13.4",
    "5.8",
    "5.6",
    "2",
    "0.2",
    "1.3",
    "4.9",
    "15.5",
    "18.1",
    "25.0",
    "31.8",
    "30.7",
    "20.8",
    "14.0",
    "2.3",
    "6.9",
    "2",
    "-11.7",
    "4.2",
    "6.1",
    "9.3",
    "17.3",
    "24.5",
    "31.7",
    "29.4",
    "19.4",
    "12.2",
    "1.9",
    "2.4",
    "2",
    "-14.2",
    "2.4",
    "7.6",
    "12.1",
    "18.3",
    "25.2",
    "31.4",
    "24.4",
    "17.6",
    "12.5",
    "2.6",
    "-2.3",
    "2",
    "-14.0",
    "1.9",
    "9.6",
    "14.6",
    "19.7",
    "27.1",
    "30.1",
    "25.2",
    "17.8",
    "13.8",
    "4.8",
    "0.6",
    "2",
    "-14.8",
    "3.1",
    "11.0",
    "14.9",
    "21.8",
    "22.3",
    "30.1",
    "23.2",
    "19.4",
    "12.2",
    "6.3",
    "-1.5",
    "2",
    "-9.9",
    "4.2",
    "13.3",
    "15.7",
    "20.3",
    "22.3",
    "30.9",
    "22.7",
    "18.9",
    "8.7",
    "7.1",
    "-10.1",
    "2",
    "-6.3",
    "4.6",
    "14.0",
    "15.4",
    "22.3",
    "23.3",
    "29.5",
    "23.7",
    "17.5",
    "8.3",
    "5.0",
    "-10.5",
    "2",
    "-8.5",
    " ",
    "15.4",
    "16.2",
    "21.4",
    "24.7",
    "31.3",
    "25.2",
    "20.2",
    "7.2",
    "3.5",
    "-7.6",
    "3",
    "-5.3",
    " ",
    "14.8",
    "19.2",
    "20.2",
    "24.4",
    "31.7",
    "25.3",
    "17.6",
    "6.1",
    "2.7",
    "-6.8",
    "3",
    "-2.6",
    " ",
    "14.0",
    " ",
    "20.9",
    " ",
    "32.6",
    "25.6",
    " ",
    "7.4",
    " ",
    "-5.4",
    "",
    "-4.0",
    "-1.6",
    "8.1",
    "13.0",
    "18.2",
    "23.1",
    "27.8",
    "28.8",
    "21.5",
    "13.1",
    "7.8",
    "-0.6"
  ];
  crawlerCase
    .inputOneYearFactorData(testCase, 108, 2018, 7)
    .write("MyWorkBook.xlsx", res);
}
