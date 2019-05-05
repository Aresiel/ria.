const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('💣Сервер успешно взломан!');
    message.delete().catch();
};
module.exports.help = {
    name: "privatehack"
};