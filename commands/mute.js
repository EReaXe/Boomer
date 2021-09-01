const ms = require("ms");

module.exports = {
  name: "mute",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Kullanıcıları Susturur.",
  permission: "KICK_MEMBERS",
  execute(message, args, client, prefix) {
    const target = message.mentions.users.first();
    if (target) {
      let muteRole = message.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> Suturuldu`);
        return;
      }

      memberTarget.roles.add(muteRole.id);
      message.channel.send(
        `<@${memberTarget.user.id}> Suturuldu (${ms(ms(args[1]))})`
      );

      setTimeout(function () {
        memberTarget.roles.remove(muteRole.id);
      }, ms(args[1]));
    } else {
      message.channel.send("Kişi bulunamadı");
    }
  },
};
