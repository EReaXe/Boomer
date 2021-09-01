const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "aşk-ölçer",
  category: "Genel",
  description: "Aşk Ölçer",
  execute(message, args, client, prefix) {
    const member = message.guild.member(
      message.mentions.users.array()[0] || message.channel.members.get(args[0])
    );
    const member2 = message.guild.member(
      message.mentions.users.array()[1] || message.channel.members.get(args[1])
    );
    var s = message.author.username;

    if (member2) {
      var s = member2.user;
    }
    if (!member) {
      const embed = new MessageEmbed()
        .setDescription("Bir üyeyi etiketleyin.")
        .setColor("RED");

      message.channel.send(embed);
      return;
    }

    var sonuc = Math.floor(Math.random() * 101);
    var love = "";
    var alove = "";

    if (Math.floor(Math.round(sonuc / 10) * 10) >= 10) {
      var c = 0;
      for (var i = 0; i < Math.floor(Math.round(sonuc / 10)); i++) {
        love += "❤️";
        c++;
      }
      for (var x = c; x < 10; x++) {
        alove += "🖤";
      }
    } else {
      var love = "🖤";
      var alove = "🖤🖤🖤🖤🖤🖤🖤🖤🖤";
    }
    var yorum = "Bu aşk dağları deler :)";
    if (sonuc < 80) {
      var yorum = "Biraz daha uğraşırsan bu iş olacak gibi :)";
    }
    if (sonuc < 60) {
      var yorum = "Eh biraz biraz bir şeyler var gibi.";
    }
    if (sonuc < 40) {
      var yorum = "Azıcıkta olsa bir şeyler hissediyor :)";
    }
    if (sonuc < 20) {
      var yorum = "Bu iş olmaz sen bunu unut.";
    }

    const embed = new MessageEmbed()
      .setAuthor(`${member.user.username} ve ${s}`)
      .setDescription(
        `Aşk yüzdesi **%${sonuc}!** \n${love}${alove} \n\n${yorum}`
      )
      .setColor("RED");

    message.channel.send(embed);
  },
};
