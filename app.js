const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=2684623b2d7293f45107711aa21febb4"

    https.get(url, function (response) {
        console.log(response);
    })

    res.send("server is running");
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
})