const Discord = require("discord.js");

const secretConfig = require("./config/secrets.json")[
  process.env.NODE_ENV || "dev"
];

const client = new Discord.Client();

/**
 * When the client is ready, do this once
 */
client.once("ready", () => {
  console.log(`Ready`);
});

client.login(secretConfig.discord.token).then(() => {
  console.log(
    `Logged in! Listening for events. NODE_ENV: ${process.env.NODE_ENV}`
  );
});

client.on("message", (message) => {
  return message
    .react("🇳")
    .then(() => message.react("🇴"))
    .then(() => message.react("🇲"))
    .then(() => message.react("🇮"))
    .then(() => message.react("🇨"));
});
