module.exports = {
  name: "avatar",
  category: "Genel",
  description: "Kişinin avatarını gönderir.",
  execute(message, args, client, prefix) {
    const user = message.mentions.users.first();
    const { MessageEmbed } = require("discord.js");

    if (user) {
      const avatar = user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 256,
      });
      const embed = new MessageEmbed()
        .setTitle(`${user.username} Adlı Kişinin Avatarı`)
        .setDescription(`[🔗 Tarayıcıda Açmak İçin Tıkla](${avatar})`)
        .setImage(avatar)
        .setColor("BLUE");
      message.channel.send(embed);
    } else {
      const avatar = message.author.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 256,
      });
      const embed = new MessageEmbed()
        .setTitle(`${message.author.username} Adlı Kişinin Avatarı`)
        .setDescription(`[🔗 Tarayıcıda Açmak İçin Tıkla](${avatar})`)
        .setImage(avatar)
        .setColor("BLUE");
      message.channel.send(embed);
    }
  },
};
