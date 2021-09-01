const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "müzik",
  category: "Yardım",
  description: "Müzik komutlarıı gösterir.",
  execute(message, args, client, prefix) {
    const genel = new MessageEmbed()
      .setTitle("Müzik Komutları")
      .setColor("RANDOM");

    message.client.commands.forEach((command) => {
      if (command.category == "Müzik") {
        genel.addField(`${prefix}${command.name}`, command.description);
      }
    });

    return message.channel.send(genel);
  },
};
