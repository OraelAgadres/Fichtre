const Discord = require("discord.js");
const bot = new Discord.Client({DisableEveryone: true})
const config = require("conf.js")


bot.on("ready", async () => {
	console.log("Hi i'm ready to kill some pussy")

	bot.user.setActivity('Pie')
});

bot.on("message", async (msg) => {
	if (msg.content == "bonjour") {
		msg.channel.send("HelloWorld!")
	}
});

bot.login(config.token)