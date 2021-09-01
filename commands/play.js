const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

module.exports = {
  name: "play",
  category: "Müzik",
  // developerOnly: true,
  description: "Müzik Çalar.",
  aliases: ["p"],
  async execute(message, args, client, prefix) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send("Bir sesli kanalda olmalısın");
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send(
        "Bu komudu kullanmak için gerekli yetkiye sahip değilsin."
      );
    if (!permissions.has("SPEAK"))
      return message.channel.send(
        "Bu komudu kullanmak için gerekli yetkiye sahip değilsin."
      );
    if (!args.length) return message.channel.send("Bir şey yaz :)");

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };

    const video = await videoFinder(args.join(" "));

    if (video) {
      const stream = ytdl(video.url, { filter: "audioonly" });
      connection.play(stream, { seek: 0, volume: 1 }).on("finish", () => {
        voiceChannel.leave;
      });

      await message.reply(`Çalıyor ***${video.title}***`);
    } else {
      message.channel.send("Aradığınız video bulunamadı");
    }
  },
};
