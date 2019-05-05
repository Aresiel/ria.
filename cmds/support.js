const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .addField("🎉Саппорт сервер бота!", "https://discord.gg/dPcFSDq ")
    .addField("🎲Основной сервер!", "https://discord.gg/8XtsKsk ")
    .addField("🎊Добавить бота на сервер!", "https://bitly.su/55n0a ")
    .setThumbnail(a.avatarURL)
    .setFooter("Доп.Информация по команде -help")

    bot.send(embed);

};
module.exports.help = {
    name: "support"
};