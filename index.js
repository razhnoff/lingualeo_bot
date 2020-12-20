const TelegramBot = require("node-telegram-bot-api");
import config from "config";
import lingualeoApi from "lingualeo-api";

// replace the value below with the Telegram token you receive from @BotFather
const TOKEN = config.get("token");

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, { polling: true });
let isAuth = false;
let login = "";
let password = "";

bot.onText(/\/login/, (msg, match) => {
  console.log("msg", msg);
  console.log("match", match);
  isAuth = true;
  const responseMsg = `Dear ${msg.chat.first_name} ${msg.chat.last_name}, please enter you login and password for <a href="https://lingualeo.com/">lingualeo.com</a>\nEnter format:\nlogin \npassword`;
  bot.sendMessage(msg.chat.id, responseMsg, { parse_mode: "HTML" });
});

bot.on("message", msg => {
  // if (isAuth) {
  const splitted = msg.text.split(/\n/);
  // login = splitted[0].trim();
  // password = splitted[1].trim();
  const email = "shahteryshka@gmail.com";
  const password = "Pad5440_99";
  lingualeoApi
    .login(email, password)
    .then(data => console.log(util.inspect(data)))
    .catch(e => console.error(e));

  bot.sendMessage(
    msg.chat.id,
    `Login: <b>${login}</b> \nPassword: <b>${password}</b>`,
    {
      parse_mode: "HTML"
    }
  );
  // }
});

if (login && password) {
  console.log("fetch");
}

// console.log(bot.getUpdates())
// Listen for any kind of message. There are different kinds of
// messages.
// bot.on("message", msg => {
//   console.log("msg: ", msg);
//
//   const chatId = msg.chat.id;
//
//   const i18n = {
//     en: "Received your message",
//     ru: "Получил ваше сообщение"
//   };
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, i18n[msg.from.language_code]);
// });
