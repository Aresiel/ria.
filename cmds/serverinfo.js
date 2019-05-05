const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#CC0C00')
    .addField("Название сервера",message.guild.name)
    .addField('Защита',message.guild.verificationLevel)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("Вы присоеденились к серверу",message.guild.joinedAt)
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .addField('Ролей',message.guild.roles.size)
    .addField('Эмоций',message.guild.emojis.size)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};