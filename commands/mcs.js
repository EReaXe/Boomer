const util = require("minecraft-server-util");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mcs",
  category: "Genel",
  description: "Minecraft sunucu durumu gösterir.",
  execute(message, args, client, prefix) {
    if (!args[0]) return message.channel.send("Geçerli bir ip gir");
    if (!args[1]) return message.channel.send("Geçerli bir port gir");

    util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
      // console.log(response);
      const embed = new MessageEmbed()
        .setColor("#8FCDEB")
        .setTitle("Minecraft Sunucu Bilgi")
        // .setImage(response.favicon)
        .addFields(
          { name: "Sunucu IP", value: response.host },
          { name: "Çevirimçi Oyuncu", value: response.onlinePlayers },
          { name: "Maksimum Oyuncu", value: response.maxPlayers },
          { name: "Sürüm", value: response.version }
        )
        .setFooter(`© 2021 | Developed by EReaX`);

      message.channel.send(embed);
    });
  },
};
