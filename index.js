const express = require("express");
const app = express()
var TelegramBot = require("node-telegram-bot-api");
var token = "504149622:AAEsbKr2qnGcEgsV-jcu1mf77p4KNsExauA";

var bot = new TelegramBot(token, { polling: true });
bot.getMe().then(function(me) {
  console.log("Hi my name is %s!", me.username);
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));