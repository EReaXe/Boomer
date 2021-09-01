// Tanımlamalar
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
const token = config.token;
const developer_id = config.developer_id;

// Collection
client.commands = new Discord.Collection();

// Commands
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
commandFiles.forEach((file) => {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
});

// Event Handlers
client.once("ready", async () => {
  console.log("Bot Çalıştırıldı!");
});

// Commands Handler
client.on("message", async (message) => {
  //Prefix
  var prefix = config.prefix;

  //Dosya Okuma
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!message.content.startsWith(prefix) || !command) return;

  // Guild Control
  if (command.guildOnly && message.channel.type == "dm")
    return message.channel.send(
      "Bu komut yanlızca sunucularda çalışabilmektedir."
    );

  // Permission Control
  if (command.permission && !message.member.hasPermission(command.permission))
    return message.channel.send(
      "Bu komutu kullanmak için gerekli yetkiye sahip değilsin."
    );

  // Developer Only Commands
  if (command.developerOnly && message.author.id != developer_id) return;

  try {
    command.execute(message, args, client, prefix);
  } catch (e) {
    console.log(e);
    message.channel.send("Bir hata oluştu.");
  }
});

client.login(token);
