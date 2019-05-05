const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о Боте")
    .setColor('0xFF0000')
    .addField("⚙️»| Администрация", "``ban`` ``kick`` ``mute`` ``warn`` ``unmute`` ``unwarn`` ``clear`` ``say`` ")
    .addField("🎉»| Развлечения", "``ship`` ``ping`` ``privatehack`` ``tops`` ``poll`` ``8ball`` ``rainbow`` ")
    .addField("🏮»| Информация", "``support`` ``help`` ``userinfo`` ``serverinfo`` ``authors`` ")
    .addField("💰»| Валюта", "``lvl`` ``timely`` ")
    .addField("🎇»| Донат", "``donate`` ``donates`` ")
    .setThumbnail(bot.user.avatarURL)
    .setFooter("Доп.информация по команде -support")

    bot.send(embed);

};
module.exports.help = {
    name: "help"
}; 