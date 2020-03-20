const Discord = require("discord.js");
const bot = new Discord.Client({DisableEveryone: true})

bot.on("ready", async () => {
	console.log("Hi i'm ready to kill some pussy")

	bot.user.setActivity('Pie')
});

bot.login(process.env.BOT_TOKEN)