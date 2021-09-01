const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Kullanıcıları Sunucudan Atar.",
  permission: "KICK_MEMBERS",
  execute(message, args, client, prefix) {
    const args1 = message.content.split(" ").slice(2);
    const neden = args1.join(" ");
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member
          .kick()
          .then(() => {
            const ban = new MessageEmbed()
              .setTitle("OLAY YERİ İNCELEME")
              .setColor("RANDOM")
              .addField("Olay:", "`Kick`")
              .addField("Kişi:", member)
              .addField("Neden:", neden);
            message.channel.send(ban);
          })
          .catch((err) => {
            message.channel.send("404");
            console.error(err);
          });
      } else {
        message.channel.send(
          new MessageEmbed()
            .setColor("RED")
            .setDescription(
              `**Kişiyi Atmak İçin** \`${prefix}kick <kişi> <neden>\``
            )
        );
      }
    } else {
      message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `**Kişiyi Atmak İçin** \`${prefix}kick <kişi> <neden>\``
          )
      );
    }
  },
};
