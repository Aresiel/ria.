const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription(" ")
    .setColor('#303136')
    .setImage('https://i.ibb.co/5chSkPm/fdcd28688684.gif')
    
    
    bot.send(embed);

};
module.exports.help = {
    name: "rainbow"
};
