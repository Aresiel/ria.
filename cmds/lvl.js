const Discord = require("discord.js");
let profile = require("../profile.json");

module.exports.run = async (bot,message,args) => {
    let a = message.author
    let embed = new Discord.RichEmbed()
    .setDescription("Ваша статистика")
    .setColor('#800080')
    .addField("<a:valut:574243167059312690> Баланс",`${profile[message.author.id].coins}`)
    .addField("🎀Уровень",`${profile[message.author.id].lvl}`)
    .addField("📌Варны" )
    
      await message.channel.send(embed);
}

module.exports.help = {
    name: 'lvl'
}
