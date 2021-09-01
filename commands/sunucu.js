const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sunucu",
  category: "Genel",
  description: "Sunucu hakkında bilgiler gösterir.",
  execute(message, args, client, prefix) {
    var guild = message.guild;
    var members = guild.members.cache;
    var roles = guild.roles.cache;

    const online = members.filter(
      (üye) => üye.presence.status === "online"
    ).size;
    const dnd = members.filter((üye) => üye.presence.status === "dnd").size;
    const idle = members.filter((üye) => üye.presence.status === "idle").size;
    const ofline = members.filter(
      (üye) => üye.presence.status === "offline"
    ).size;
    const bot = members.filter((üye) => üye.user.bot).size;

    var sunucu = new MessageEmbed()
      .setTitle(`${guild.name} adlı sunucunun bilgileri`)
      .setColor("RED")
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addField("**BİLGİLER**", [
        `**Sunucu Adı:** ${guild.name}`,
        `**Sunucu Sahibi:** <@${guild.owner.id}>`,
        `**Bölge:** ${guild.region}`,
      ])
      .addField("**İSTATİSTİKLER**", [
        `**Üye Sayısı:** ${members.filter((üye) => !üye.user.bot).size}`,
        `**Rol Sayısı:** ${
          roles.filter((rol) => rol.name !== "@everyone").size
        }`,
      ])
      .addField("DURUMLAR", [
        `**Çevrimiçi Üye:** ${online + dnd + idle}`,
        `**Çevrimdışı Üye:** ${ofline}`,
        `**Bot:** ${bot}`,
      ])
      .setTimestamp(guild.createdTimestamp);
    message.channel.send(sunucu);
  },
};
