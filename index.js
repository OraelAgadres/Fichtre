const Discord = require("discord.js");
const bot = new Discord.Client({DisableEveryone: true})
const config = require("./conf.js")


bot.on("ready", async () => {
	console.log("Hi i'm ready to kill some pussy")

	bot.user.setActivity('Pie')
});

bot.on("message", async (msg) => {

	if (msg.content.startsWith(config.prefix) && !msg.author.bot) {
		var cmdArray = msg.content.substring(2).split(" ")
		var cmd = cmdArray[0]

		var args = cmdArray.slice(1)

		msg.channel.send(cmd)
		for (var i = 0, c = args.length; i < c; i++) {
			msg.channel.send(args[i])
		}
	}
});

bot.login(config.token)