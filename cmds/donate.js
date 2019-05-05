const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("💰Материальная помощь!")
    .setColor(0xFF0000)
    .addField("✨QIWI", "https://qiwi.com/p/380956398566 ")
    .addField("⚡️DonationAlerts", "https://www.donationalerts.com/r/minecraftredi ")
    .setThumbnail(bot.user.avatarURL)
    .setFooter("Создатель: rediч#2745")

    bot.send(embed);

};
module.exports.help = {
    name: "donate"
};