const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "moderasyon",
  category: "Yardım",
  description: "Yetkili Komutlarını gösterir.",
  execute(message, args, client, prefix) {
    const genel = new MessageEmbed()
      .setTitle("Yetkili Komutları")
      .setColor("RANDOM");

    message.client.commands.forEach((command) => {
      if (command.category == "Yetkili") {
        genel.addField(`${prefix}${command.name}`, command.description);
      }
    });

    return message.channel.send(genel);
  },
};
