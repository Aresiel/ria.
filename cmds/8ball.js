const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Пожалуйста, введите полный вопрос с двумя или более словами!");
    let replies = ["Да", "Нет", "Я не знаю", "Скажу позже!", "Иди на фиг ", "Я не уверен", "Пожалуй нет", "Кому ты рассказываешь", "Без сомнения да", "Не могу предсказать сейчас", "Без сомнения нет", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#e22216")
    .addField("Вопрос", question)
    .addField("Ответ", replies[result])
    .setThumbnail(bot.user.avatarURL)
    .setFooter('Ria. | Доп.Инфа. -help', bot.user.avatarURL);

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball"
    }
