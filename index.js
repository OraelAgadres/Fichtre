const Discord = require("discord.js");
const bot = new Discord.Client({DisableEveryone: true})
const config = require("./conf.js")


bot.on("ready", async () => {
	console.log("i'm ready to kill some pussy")
	nbMsg = 0
	bot.user.setActivity('Pie')
});

bot.on("message", async (msg) => {

	if (msg.content.startsWith(config.prefix) && !msg.author.bot) {
		var cmdArray = msg.content.substring(2).split(" ")
		var cmd = cmdArray[0]
		var args = cmdArray.slice(1)

		if (cmd == "count") {
			process.env.BOT_count++;
			msg.reply(process.env.BOT_count);
		}

		if (cmd == "ping") {
			msg.reply("pong :joy:");
		}

	}

});

bot.login(config.token)