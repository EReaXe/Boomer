const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "reload",
  developerOnly: true,
  execute(message, args, client, prefix) {
    if (!args.length)
      return message.channel.send(
        new MessageEmbed()
          .setColor("BLUE")
          .setDescription(`**Yenilemek İstediğiniz Komutu Giriniz**`)
      );

    const commandName = args[0];
    const command =
      client.commands.get(commandName) ||
      client.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command)
      return message.channel.send(
        new MessageEmbed()
          .setColor("BLUE")
          .setDescription(`**${commandName}** adında bir komut bulunamadı.`)
      );

    delete require.cache[require.resolve(`./${command.name}.js`)];

    try {
      const newCommand = require(`./${command.name}`);
      client.commands.set(command.name, newCommand);
      message.channel.send(
        new MessageEmbed()
          .setColor("BLUE")
          .setDescription(`**${command.name}** Adlı Komut Başarıyla Yenilendi.`)
      );
    } catch (e) {
      message.channel.send(
        new MessageEmbed()
          .setColor("RED")
          .setDescription(`**Bir hata oluştu.**`)
      );
      console.error(e);
    }
  },
};
