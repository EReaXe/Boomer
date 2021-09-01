module.exports = {
  name: "ping",
  category: "Genel",
  description: "Kişinin Pingini Gösterir.",
  execute(message, args, client, prefix) {
    const { MessageEmbed } = require("discord.js");
    const holdMessage = new MessageEmbed().setTitle("*Ping ölçülüyor..*");

    const holdMessage2 = new MessageEmbed().setTitle("*Ping ölçülüyor...*");

    const pingMessage = new MessageEmbed()
      .setTitle(":ping_pong: | Pinginiz")
      .setDescription(
        "**" + Math.round(client.ws.ping) + "ms** olarak ölçüldü."
      );

    message.channel.send(holdMessage).then((msg) => {
      setTimeout(() => {
        msg.edit(holdMessage2);
      }, 1000);
      setTimeout(() => {
        msg.edit(pingMessage);
      }, 3000);
    });
  },
};
