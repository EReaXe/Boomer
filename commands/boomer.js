const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const { developer_id } = require("../config.json");

module.exports = {
  name: "boomer",
  category: "Genel",
  description: "Boomer hakkında bilgiler gösterir.",
  execute(message, args, client, prefix) {
    const uptime = moment
      .duration(client.uptime)
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const boomer = new MessageEmbed()
      .setColor("BLUE")
      .addFields(
        {
          name: "» <:developer:863521277141975051> Geliştirici",
          value: `<@!${developer_id}>`,
        },
        {
          name: "» ⏲️ Gecikme Süresi",
          value: client.ws.ping + " ms",
          inline: true,
        },
        {
          name: "» 🗄️ Bellek Kullanımı",
          value:
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
          inline: true,
        },
        { name: "» ⏳ Çalışma Süresi", value: uptime, inline: true },
        {
          name: "» 👥 Sunucu Sayısı",
          value: client.guilds.cache.size,
          inline: true,
        },
        {
          name: "» <:djs:867030930882953216> Discord.js Sürüm",
          value: "v" + Discord.version,
          inline: true,
        },
        {
          name: "» <:nodejs:867030956468207657> Node.js Sürüm",
          value: process.version,
          inline: true,
        },
        {
          name: "» 🎛️ CPU",
          value:
            "```" + "AMD Ryzen 3 3200G\nwith Radeon Vega\nGraphics" + "```",
          inline: true,
        },
        { name: "» 🛰️ Bit", value: "`" + os.arch + "`", inline: true },
        {
          name: "» 🖥️ İşletim Sistemi",
          value: "`" + os.platform + "`",
          inline: true,
        }
      )
      .setFooter(`© 2021 | Developed by EReaX`)
      .setTimestamp();
    message.channel.send(boomer);
  },
};
