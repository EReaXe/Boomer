const moment = require("moment");
require("moment-duration-format");

const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "profil",
  category: "Genel",
  // developerOnly: true,
  description: "Kullanıcı bilgilerini gösterir.",
  aliases: ["info"],
  execute(message, args, client, prefix) {
    let member = message.mentions.users.first();

    if (member) {
      // Özellikler
      const day = moment(member.createdAt).format("DD");
      const month = moment(member.createdAt).format("MM");
      const year = moment(member.createdAt).format("YYYY HH:mm:ss");
      const rol = message.guild.members.cache
        .get(member.id)
        .roles.cache.filter((r) => r.name !== "@everyone")
        .map((r) => r)
        .join(" | ");
      let durum = member.presence.status
        .replace("online", "Çevirimiçi")
        .replace("offline", "Çevrimdışı")
        .replace("idle", "Boşta")
        .replace("dnd", "Rahatsız Etmeyin");

      //Embed
      const bilgi = new MessageEmbed()
        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
        .setColor("GREEN")
        .setTitle(member.username)
        .setDescription(member.tag + " kişisinin bilgileri;")
        .addFields(
          {
            name: `Kullanıcı Adı:`,
            value: `${member.username}\n\u200b`,
            inline: true,
          },
          { name: `Etiket:`, value: `${member.discriminator}`, inline: true },
          { name: `ID:`, value: `${member.id}`, inline: true },
          {
            name: `Son Mesaj:`,
            value: `https://discord.com/channels/${message.guild.id}/${member.lastMessageChannelID}/${member.lastMessageID}\n\u200b`,
            inline: true,
          },
          {
            name: `Bot:`,
            value: `${member.bot ? "Evet" : "Hayır"}`,
            inline: true,
          },
          { name: `Durum:`, value: `${durum}`, inline: true },
          {
            name: `Hesap Oluşturma Tarihi:`,
            value: `${day}/${month}/${year}`,
            inline: true,
          },
          { name: `Roller:`, value: `${rol}`, inline: true }
        );
      message.channel.send(bilgi);
    } else {
      member = message.author;

      // Özellikler
      const day = moment(member.createdAt).format("DD");
      const month = moment(member.createdAt).format("MM");
      const year = moment(member.createdAt).format("YYYY HH:mm:ss");
      const rol = message.guild.members.cache
        .get(member.id)
        .roles.cache.filter((r) => r.name !== "@everyone")
        .map((r) => r)
        .join(" | ");
      let durum = member.presence.status
        .replace("online", "Çevirimiçi")
        .replace("offline", "Çevrimdışı")
        .replace("idle", "Boşta")
        .replace("dnd", "Rahatsız Etmeyin");

      //Embed
      const bilgi = new MessageEmbed()
        .setThumbnail(member.displayAvatarURL({ dynamic: true }))
        .setColor("GREEN")
        .setTitle(member.username)
        .setDescription(member.tag + " kişisinin bilgileri;")
        .addFields(
          {
            name: `Kullanıcı Adı:`,
            value: `${member.username}\n\u200b`,
            inline: true,
          },
          { name: `Etiket:`, value: `${member.discriminator}`, inline: true },
          { name: `ID:`, value: `${member.id}`, inline: true },
          {
            name: `Son Mesaj:`,
            value: `https://discord.com/channels/${message.guild.id}/${member.lastMessageChannelID}/${member.lastMessageID}\n\u200b`,
            inline: true,
          },
          {
            name: `Bot:`,
            value: `${member.bot ? "Evet" : "Hayır"}`,
            inline: true,
          },
          { name: `Durum:`, value: `${durum}`, inline: true },
          {
            name: `Hesap Oluşturma Tarihi:`,
            value: `${day}/${month}/${year}`,
            inline: true,
          },
          { name: `Roller:`, value: `${rol}`, inline: true }
        );
      message.channel.send(bilgi);
    }
  },
};
