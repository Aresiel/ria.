const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("🔱Донатеры:")
    .setColor('#CC0C00')
    .addField("🢛 OfKa 🢛", "20руб ")
    .setFooter('Пожертвовать: -donate', bot.user.avatarURL)

    bot.send(embed);

};
module.exports.help = {
    name: "donates"
};