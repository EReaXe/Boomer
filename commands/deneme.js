module.exports = {
  name: "deneme",
  category: "Genel",
  description: "Kişinin avatarını gönderir.",
  execute(message, args, client, prefix) {
    const member = message.mentions.users.first();

    console.log(me);
  },
};
