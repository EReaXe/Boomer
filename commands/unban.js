const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unban",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Yasaklı Kullanıcıların Yasağını Kaldırır.",
  permission: "BAN_MEMBERS",
  execute(message, args, client, prefix) {
    let id = args[0];
    if (isNaN(id))
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(`**Lütfen geçerli bir kullanıcı ID giriniz.**`)
      );
    message.guild.fetchBans().then((ban) => {
      if (ban.size === 0)
        return message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(`**Bu sunucuda yasaklama yok.**`)
        );
      const banlanan = ban.find((b) => b.user.id === id);
      if (!banlanan)
        return message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(`**Bu kişi bu sunucudan yasaklanmamış.**`)
        );
      message.guild.members.unban(banlanan.user);
      message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(`**Bu kişinin yasağı kalkmıştır.**`)
      );
    });
  },
};
