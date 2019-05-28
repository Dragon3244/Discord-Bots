//variables
var Discord = require('discord.io');
var logger = "console";
var auth = require('./auth.json');

//bot's discord client
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

function send(c, t) {
	bot.sendMessage({
		to: c,
		message: t
	})
}

//bot's "ready" event
bot.on('ready', function (evt) {
	bot.setPresence({
		status: "dnd",
		game:{
			name: "Lhelp"
		}
	});
	logger.info('|||[[[ Ready ')
   	logger.info('|||[[[ Connected ');
    	logger.info('|||[[[ Logged in as: ' + bot.username + ' - (' + bot.id + ')');
	logger.info('|||[[[ Start of log')
});

//bot's "message" event
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == 'L') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch(cmd) {
			case 'hi':
				send(channelID, 'Hi, my name is LuigiBot.')
				logger.info(user + ' has executed the command hi')
			break;
			case 'blah':
				send(channelID, 'Blahblahblah.'
				logger.info(user + ' has executed the command blah')
			break;
			case 'macandcheese':
				send(channelID, 'Here, have some mac and cheese.')
				logger.info(user + ' has executed the command macandcheese')
			break;
			case 'fastfood':
				send(channelID, ':hamburger: :fries:')
				logger.info(user + ' has executed the command fastfood')
			break;
			case 'spam':
				send(channelID, 'HOURHN4I UHNEUO GJETIOHE O HOETTOEOGHJO EO GETOG JGHJ RTJG ORTJHG ORTH ORTJH ORJH ORTJ ORTJHTJHORTJGHIORJHIOJBO RRTREFSFG')
				logger.info(user + ' has executed the command spam')
			break;
			case 'pingeveryone':
				send(channelID, '@everyone')
				logger.info(user + ' has executed the command pingeveryone')
			break;
			case 'randomnumber':
				send(channelID, Math.floor(Math.random() * 101))
				logger.info(user + ' has executed the command randomnumber')
			break;
			case 'help':
				send(channelID, '**Commands:**\nl?hi - says hi to you\nl?blah does the blahblahblah thing\nl?macandcheese gives you mac and cheese\nl?fastfood gives you fast food\nl?spam spammity spam spam\nl?pingeveryone pings everyone\nl?randomnumber gives you a random number\nl?help shows this thing\nl?kill kills stuff\nl?succ s u c c\nl?howlongyourdickis shows how long it is\nl?votepewdiepie votes for pewdiepie\nl?votetseries votes for t-series\nl?credits shows the credits thing')
				logger.info(user + ' has executed the command help')
			break;
			case 'kill':
				send(channelID, '***LOUD FUCKING SCREAMS OF HELL***')
				logger.info(user + ' has executed the command kill')
			break;
			case 'succ':
				send(channelID, 'You have succed **' + Math.floor(Math.random() * 31) + '** dicks')
				logger.info(user + ' has executed the command succ')
			break;
			case 'howlongyourdickis':
				send(channelID, 'Your dick is **' + Math.floor(Math.random() * 31) + '** centimeter(s) long')
				logger.info(user + ' has executed the command howlongyourdickis')
			break;
			case 'credits':
				send(channelID, '**Credits:**\nQeaML#5450 for the helping of making a bot'
			logger.info(user + ' has executed the command credits')
			break;
        }
    }
});
