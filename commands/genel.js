const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "genel",
  category: "Yardım",
  description: "Genel kullanıcı komutlarıı gösterir.",
  execute(message, args, client, prefix) {
    const genel = new MessageEmbed()
      .setTitle("Genel Komutlar")
      .setColor("RANDOM");

    message.client.commands.forEach((command) => {
      if (command.category == "Genel") {
        genel.addField(`${prefix}${command.name}`, command.description);
      }
    });

    return message.channel.send(genel);
  },
};
