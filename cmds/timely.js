const Discord = module.require("discord.js");
const fs = require("fs");
const profile = require('../profile.json');
let bs = require ('../botset.json');

module.exports.run = async (bot,message,args) => {
    if(message.author.id === "430799898254901248") return message.channel.send("❌ | ты в черном списке бота!");
    try{
    let bonus = bs.bonuscoins;
    let time = 1000*60*bs.bonustime;
    if(profile[message.author.id].bs > Date.now()) return bot.send(`Простите, но вы не можете забрать бонус сейчас.\nВам осталось ждать: ${Math.floor(((profile[message.author.id].bs-Date.now())/1000)/60)} минут`);
    profile[message.author.id].coins += bonus;
    profile[message.author.id].bs = time+Date.now();
   let embed = new Discord.RichEmbed()
    .setColor('#800080')
        .addField(`<a:valut:574243167059312690> Вы получили кристалики в размере **100** `,`Кристалики можно получать - один раз в 10 минут. `)
        message.channel.send(embed);
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    
}catch(err){
    console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
}
};
module.exports.help = {
    name: "timely",
    aliases: []
};
