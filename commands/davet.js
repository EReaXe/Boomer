const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "davet",
  guildOnly: true,
  execute(message, args, client, prefix) {
    const davet = new MessageEmbed()
      .setColor("BLUE")
      .setAuthor(`Boomer Linkler`, client.user.avatarURL())
      .setDescription(
        "**• [Boomer`ı Sunucunuza Ekleyin.](https://discord.com/api/oauth2/authorize?client_id=816040404101234759&permissions=8&scope=bot)**"
      )
      .setFooter(`${message.author.username} tarafından istendi!`)
      .setTimestamp();
    message.channel.send(davet);
  },
};
