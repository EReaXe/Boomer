const { MessageEmbed } = require("discord.js");

const oyunlar = ["minecraft", "zula", "csgo"];

module.exports = {
  name: "playmate",
  category: "Genel",
  description: "Sunucudaki kişilere oyun daveti gönderir.",
  execute(message, args, client, prefix) {
    const game = args[0];
    const note = message.content.split(" ").slice(2);
    const not = note.join(" ");
    if (!game) {
      message.channel.send(
        new MessageEmbed()
          .setDescription(
            `**Oyun Daveti Göndermek İçin** \`${prefix}playmate <oyun> <not>\``
          )
          .setColor("RED")
      );
    } else if (!not) {
      message.channel.send(
        new MessageEmbed()
          .setDescription(
            `**Oyun Daveti Göndermek İçin** \`${prefix}playmate <oyun> <not>\``
          )
          .setColor("RED")
      );
    } else if (game === "pubg") {
      const playmate = new MessageEmbed()
        .setTitle("Takım Arkadaşı Aranıyor")
        .setColor("RED")
        .addField("Kişi:", `**<@${message.author.id}>**`)
        .addField("Oyun:", `PlayerUnknown's Battlegrounds`)
        .addField("Not:", `${not}`);
      message.channel.send(playmate);
    } else {
      const playmate = new MessageEmbed()
        .setTitle("Takım Arkadaşı Aranıyor")
        .setColor("RED")
        .addField("Kişi:", `**<@${message.author.id}>**`)
        .addField("Oyun:", `${game}`)
        .addField("Not:", `${not}`);
      message.channel.send(playmate);
    }
  },
};
