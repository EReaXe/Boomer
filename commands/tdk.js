const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "tdk",
  category: "Genel",
  description: "TDK Sözlük",
  execute(message, args, client, prefix) {
    async function tdk() {
      const tdk = require("trsozluk");
      if (!args[0])
        return message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(
              `**TDK Sözlük | Kelime Aratmak İçin** \`${prefix}tdk <kelime>\``
            )
        );

      try {
        const kelime = await tdk(args[0]);
        const sozluk = new MessageEmbed()
          .setTitle("TDK Sözlük")
          .setURL("https://sozluk.gov.tr/")
          .setColor("RED")
          .setThumbnail("https://bit.ly/38kTpdH")
          .setDescription("**" + args[0] + "** kelimesinin")
          .addField("Anlamı", kelime.anlam)
          .addField("İkinci Anlamı", kelime.anlam2)
          .addField("Örnek Kullanımı", kelime.ornek)
          .setFooter("Türk Dil Kurumu", "https://bit.ly/38kTpdH");
        message.channel.send(sozluk);
      } catch (e) {
        message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(`**TDK Sözlükde böyle bir kelime bulamadım.**`)
        );
      }
    }
    tdk();
  },
};
