const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nick",
  category: "Yetkili",
  description: "Kişinin kullanıcı adını değiştirir.",
  permission: "MANAGE_NICKNAMES",
  execute(message, args, client, prefix) {
    const user = message.mentions.members.first();

    if (!user)
      return message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `**Kullanıcı Adını Değiştirmek İçin** \`${prefix}nick <kişi> <yeni nick>\``
          )
      );
    const newNickname = args.splice(1, args.length - 1).join(" ");
    user
      .setNickname(newNickname)
      .then(() => {
        return message.channel.send(
          new MessageEmbed()
            .setDescription(
              `${user.user.username} Adlı kişinin kullanıcı adı ${newNickname} olarak değiştirldi.`
            )
            .setColor("RED")
        );
      })
      .catch(() => {
        return message.channel.send(
          new MessageEmbed()
            .setDescription(
              `${user.user.username} Adlı kişinin kullanıcı adı değiştirilemiyor.`
            )
            .setColor("RED")
        );
      });
  },
};
