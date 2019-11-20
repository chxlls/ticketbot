const Discord = require("discord.js")
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

module.exports.run = (bot, message, args) => {
    if(!message.content.startsWith('ticket.'))return;
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setColor("#e64b0e")    
            .setThumbnail(bot.user.displayAvatarURL)
            .setAuthor('AusVeda Support Info', bot.user.displayAvatarURL)
            .addField("Developer ", `chills#8215`, true)
            .addField("Users", `${bot.users.size.toLocaleString()}`, true)
            .addField("Channels ", `${bot.channels.size.toLocaleString()}`, true)
            .addField("Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)           
            .addField("CPU Usage", `\`${percent.toFixed(2)} %\``, true)
        
            message.channel.send(embedStats)
    });
};


module.exports.help = {
    name: "botinfo",
    aliases: ["bi"]
};