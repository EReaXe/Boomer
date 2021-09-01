const Discord = require("discord.js");

module.exports = {
  name: "cf",
  category: "Genel",
  description: "Yazı Tura Atar",
  async execute(message, args, client, prefix) {
    const msg = await message.channel.send(embed("", "Yazı-Tura Atılıyor..."));

    setTimeout(() => {
      msg.delete();

      const randomNumber = Math.floor(Math.random() * 100) + 1;

      if (randomNumber <= 50) {
        const embed = new Discord.MessageEmbed().setTitle(`Sonuç: Yazı`);
        // .setImage('attachment://yaz.png')
        message.channel.send(embed);
      } else {
        const embed = new Discord.MessageEmbed().setTitle(`Sonuç: Tura`);
        // .setImage('attachment://tura.png')
        message.channel.send(embed);
      }
    }, 3000);
  },
};
