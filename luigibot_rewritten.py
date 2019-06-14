import discord
from random import randint

bot = discord.Client()

@bot.event
async def on_ready():
	print("Bot ready, logged in as {0.user.name}/{0.user.id}".format(bot))
@bot.event
async def on_message(message):
	if not message.author.bot and message.guild is not None:
		if message.content.startsWith("l?"):
			arg = message.content.split(" ")
			cmd = a[0].replace("l?", "")
			cmd = cmd.lower()
			arg.remove(cmd)
			if cmd == "hi":
				await message.channel.send("Hello, my name is Labut.")
			elif cmd == "blah":
				await mesasge.channel.send("blah *blah* **blah** ***blah***")
			elif cmd == "macandcheese":
				await message.channel.send("Here, have some Mac and Cheese. *gives mac and cheese to <@{0.author.id}>*".format(message))
			elif cmd == "fastfood":
				await message.channel.send("Here, have some Fastfood. *gives hamburger and fires to <@{0.author.id}>*".format(message))
			elif cmd == "spam":
				i = 0
				while i < 0:
					await message.channel.send("SPAM")
					a += 1
			elif cmd == "randomnumber":
				await message.channel.send(str(randint(0, 1000)))
			elif cmd == "help":
				await message.channel.send("**Labut help**\nl?help - shows this\nl?hi - says hello to you\nl?blah - does the blah blah blah thing\nl?macandcheese - gives you mac and cheese\nl?fastfood - gives you fastfood\nl?spam - spams\nl?kill <victim> - kill the specified victim\nl?succ - ***s u c c***\nl?dicklength - shows the length of your dick\nl?credits - credits")
			elif cmd == "kill":
				try:
					victim = message.content.replace(cmd, "")
					await message.channel.send("**Loud screams of{0}**".format(victim))
				execpt:
					await message.channel.send("You need to specify what do you want to kill!")
			elif cmd == "succ":
				dicks = randint(0, 25)
				await message.channel.send("You have succ'd {0} dicks.".format(dicks))
			elif cmd == "dicklength":
				length = randint(-10, 20)
				await message.channel.send("Your dick is {0}cm long.".format(length))
			elif cmd == "credits":
				await message.channel.send("Original creator: <@490169798244958208>\nRewritten by: <@396699211946655745>")
				
bot.run("token")
