const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("<a:valut:574243167059312690> Создатель бота!")
    .setColor(0xFF0000)
    .addField("✨Создатель", "rediч#2745 ")
    .addField("⚡️Cвязь:", "https://vk.com/reedi ")
    .setThumbnail(bot.user.avatarURL)
    .setFooter("По вопросам писать в лс!")

    bot.send(embed);

};
module.exports.help = {
    name: "authors"
};