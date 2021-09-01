const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["yardım"],
  execute(message, args, client, prefix) {
    const help = new MessageEmbed()
      .setAuthor(`Boomer Yardım Menüsü`, client.user.avatarURL())
      .setColor("GREEN")
      .setDescription(
        `Merhaba, sizin için uygun olan kategorilerin yardım komutları;`
      )
      .addField(`__Genel Komutlar__`, `\`${prefix}genel\``, true)
      .addField(`__Moderasyon Komutları__`, `\`${prefix}moderasyon\``, true)
      .addField(`__Müzik Komutları__`, `\`${prefix}müzik\``, true)
      .addField(`__Prefix Değiştir__`, `\`${prefix}prefix\``, true)
      .addField(
        `__Bilgilendirme__`,
        `\`${prefix}davet\` | Boomer'ı Sunucunuza Davet Edersiniz\n\`${prefix}boomer\` | Botun İstatistiklerini Gösterir\n\`${prefix}reset\` | Botun Ayarlarını Sıfırlar\n\`${prefix}report\` | Bot Hatalarını Bildir`
      )
      .setFooter(`© 2021 | Developed by EReaX`)
      .setTimestamp();
    message.channel.send(help);
  },
};
