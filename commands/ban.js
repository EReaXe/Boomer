const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Kullanıcıları Sunucudan Yasaklar.",
  permission: "BAN_MEMBERS",
  execute(message, args, client, prefix) {
    const args1 = message.content.split(" ").slice(2);
    const neden = args1.join(" ");
    const user = message.mentions.users.first();

    if (user) {
      const member = message.guild.member(user);

      if (member) {
        member
          .ban()
          .then(() => {
            const ban = new MessageEmbed()
              .setTitle("OLAY YERİ İNCELEME")
              .setColor("RANDOM")
              .addField("Olay:", "`Ban`")
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
              `**Kişiyi Yasaklamak İçin** \`${prefix}ban <kişi> <neden>\`\n **Kaldırmak İçin** \`${prefix}unban <id>\``
            )
        );
      }
    } else {
      message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(
            `**Kişiyi Yasaklamak İçin** \`${prefix}ban <kişi> <neden>\`\n **Kaldırmak İçin** \`${prefix}unban <id>\``
          )
      );
    }
  },
};
