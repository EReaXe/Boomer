const Parser = require("rss-parser");
const parser = new Parser();
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "news",
  category: "Genel",
  description: "Haberleri Gösterir.",
  async execute(message, args, client, prefix) {
    const feed = await parser.parseURL("https://shiftdelete.net/feed");

    const news = feed.items;
    const random = Math.floor(Math.random() * news.length);

    const haber = news[random];

    const infoembed = new MessageEmbed()
      .setTitle(haber.title)
      .setDescription(haber.contentSnippet)
      .setFooter(haber.creator)
      .setColor("YELLOW");

    message.channel.send(infoembed);
  },
};
