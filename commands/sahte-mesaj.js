const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sahte-mesaj",
  category: "Genel",
  description: "Sahte Mesaj Atar.",
  async execute(message, args, client, prefix) {
    const user = message.mentions.users.first();
    if (!user)
      return message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(
            `**Sahte Mesaj Atmak İçin** \`${prefix}sahte-mesaj <kişi> <mesaj>\``
          )
      );
    // if (user.bot) return
    if (!args[1])
      return message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setDescription(
            `**Sahte Mesaj Atmak İçin** \`${prefix}sahte-mesaj <kişi> <mesaj>\``
          )
      );
    const msg = args.slice(1).join(" ");
    message.delete();
    const webhook = await message.channel.createWebhook(user.username, {
      reason: "Sahte Mesaj",
      avatar: user.displayAvatarURL(),
    });
    webhook.send(msg);
    setTimeout(() => {
      webhook.delete();
    }, 1000);
  },
};
