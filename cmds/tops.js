const Discord = require('discord.js');

exports.run = async (client, message) => {
 
  if (client.guilds.size < 10) return message.reply("Бот должен нахдится на 10 серверах!")
  
const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
message.channel.send(`🥇1) **${top[0].name}**: - ${top[0].memberCount} Участников.\n🥈2) **${top[1].name}**: - ${top[1].memberCount} Участников.\n🥉3) **${top[2].name}**: - ${top[2].memberCount} Участников.\n🏅4) **${top[3].name}**: - ${top[3].memberCount} Участников.\n🏅5) **${top[4].name}**: - ${top[4].memberCount} Участников.\n🏅6) **${top[5].name}**: - ${top[5].memberCount} Участников.\n🏅7) **${top[6].name}**: - ${top[6].memberCount} Участников.\n🏅8) **${top[7].name}**: - ${top[7].memberCount} Участников.\n🏅9) **${top[8].name}**: - ${top[8].memberCount} Участников.\n🏅10) **${top[9].name}**: - ${top[9].memberCount} Участников.`)
  
}

exports.conf = {
enabled: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: "tops",
description: "Top10 listesi.",
usage: "tops"
};