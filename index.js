const Discord = require("discord.js");
const bot = new Discord.Client({DisableEveryone: true})
const config = require("./conf.js")


bot.on("ready", async () => {
	console.log("Hi i'm ready to kill some pussy")

	bot.user.setActivity('Pie')
});

bot.on("message", async (msg) => {
	if (msg.content.startsWith(config.prefix) && !msg.author.bot) {

		console.log("message")

		var cmdArray = msg.content.substring(1).split()
		var cmd = cmdArray[0]

		var args = cmdArray.slice(1)

		msg.channel.send
	}
});

bot.login(config.token)