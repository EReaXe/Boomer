const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "komutlar",
  category: "Genel",
  description: "Komut sayısını gösterir.",
  execute(message, args, client, prefix) {
    const komutlar = new MessageEmbed()
      .setTitle(`Boomer - Komut Sayısı`)
      .setDescription(
        "**\n Boomer | Toplam**  **`" +
          client.commands.size +
          "`** **Komut Vardır!**"
      )
      .setColor("PINK")
      .setThumbnail("https://i.ibb.co/s2qGRFx/kod.png")
      .setFooter(`© 2021 | Developed by EReaX`)
      .setTimestamp();
    message.channel.send(komutlar);
  },
};
