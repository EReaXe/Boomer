module.exports = {
  name: "unmute",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Susturulmayı kaldırır.",
  permission: "KICK_MEMBERS",
  execute(message, args, client, prefix) {
    const target = message.mentions.users.first();
    if (target) {
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.remove(muteRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> adlı kişinin susturulması kaldırıldı.`
      );
    } else {
      message.channel.send("Kişi bulunamadı");
    }
  },
};
