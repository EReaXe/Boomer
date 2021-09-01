const { MessageEmbed } = require("discord.js");
const Alone = "#36393e";
const Dogru = "#22BF41";
const Hata = "#f30707";

module.exports = {
  name: "report",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Botta bulunan hataları bildirir.",
  permission: "MANAGE_CHANNELS",
  async execute(message, args, client, prefix) {
    const onerisiz = new MessageEmbed()
      .setColor(Hata)
      .setDescription("Lütfen tespit ettiğiniz hatayı yazınız.");

    const onerili = new MessageEmbed()
      .setColor(Dogru)
      .setDescription("Şikayetiniz alınmıştır Teşekkür Ederiz.");

    var öneri = args.slice(0).join(" ");

    var guildID = "775831003682832394"; // Sunucu ID
    var channelID = "850088526401896498"; // Kanal ID

    if (!öneri) {
      return message.channel.send(onerisiz);
    } else {
      var embed = new MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor("Yeni Bir Öneri!", client.user.avatarURL())
        .addField("• Kullanıcı:", `<@!${message.author.id}>`, true)
        .addField("• Kullanıcı ID:", message.author.id, true)
        .addField("• Hata:", öneri)
        .setThumbnail(message.author.avatarURL());

      client.guilds.cache
        .get(guildID)
        .channels.cache.get(channelID)
        .send(embed);

      message.channel.send(onerili);
    }
  },
};
