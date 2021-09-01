module.exports = {
  name: "leave",
  category: "Müzik",
  // developerOnly: true,
  description: "Müziği kapatır.",
  aliases: ["p"],
  async execute(message, args, client, prefix) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send("Bot kanalda değil.");
    await voiceChannel.leave();
    await message.channel.send("Bot kanaldan ayrıldı.");
  },
};
