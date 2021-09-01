const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  category: "Yetkili",
  description: "Mesajları Siler.",
  permission: "MENAGE_MESSAGES",
  execute(message, args, client, prefix) {
    if (isNaN(args))
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `**Mesajları Temizlemek İçin** \`${prefix}clear <sayı>\`\n **Lütfen 2 ile 100 arasaında bir sayı giriniz.**`
          )
      );
    if (args < 2 || args > 101)
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `**Mesajları Temizlemek İçin** \`${prefix}clear <sayı>\`\n **Lütfen 2 ile 100 arasaında bir sayı giriniz.**`
          )
      );
    message.channel.bulkDelete(Number(args));
    const clear = new MessageEmbed()
      .setColor("RED")
      .setTitle("Mesajlar Başarıyla Silindi")
      .setDescription("Silinen Mesaj Sayısı: " + args);
    message.channel.send(clear);
  },
};
