const { request } = require("express");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("<h1>Hello_World !</h1>");
    console.log(request);
});

app.get("/contacts", (req, res) => {
    res.send("<h2>contact me=hsr7047@gmail.com</h2>")
});

app.get("/about", (req, res) => {
    res.send("<ul><li>Name:Hemant Singh</li><li>Phone:9873993897</li></ul>")
})

app.get("/hobbies", (req, res) => {
    res.send("<h1>Music 🎵 & Betminton 🎾</h1>")
})

app.listen(3000, () => {
    console.log("Out localhost:3000 is running");
});