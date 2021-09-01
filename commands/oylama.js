const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "oylama",
  //aliases: ["ban", "ban"],
  category: "Yetkili",
  description: "Oylama yapar.",
  permission: "MANAGE_MESSAGES",
  async execute(message, args, client, prefix) {
    const oylama = args.join(" ");

    if (!oylama)
      return message.channel.send(
        new MessageEmbed()
          .setDescription(
            `**Oylama Başlatmak İçin** \`${prefix}oylama <konu>\``
          )
          .setColor("BLUE")
      );

    const oylamaEmbed = new MessageEmbed()
      .setColor("BLUE")
      .setDescription(`**${oylama}**`);

    message.channel.send(oylamaEmbed).then(function (message) {
      message.react("👍🏻");
      message.react("👎🏻");
    });
  },
};
