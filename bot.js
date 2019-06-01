//variables
var Discord = require('discord.io');
var logger = "console";
var auth = require('./auth.json');

//functions
function get() {
	const random_1000 = function(){
		return Math.floor(Math.random * 1001)
	}
	const random_100 = function(){
		return Math.floor(Math.random * 101)
	}
	const random_10 = function (){
		return Math.floor(Math.random * 11)
	}
}

//create bot client
var bot = new Discord.Client({
	token: auth.token,
	autorun: true
});

function send(c, t) {
	bot.sendMessage({
		to: c,
		message: t
	});
}

//bot's "ready" event
bot.on('ready', function (evt) {
	//set the bot's presence
	bot.setPresence({
		//DO NOT DISTURB THE BOT WITH UNNECCESSARY CRAP
		status: "dnd",
		//haha funny
		game:{
			name: "Thelp me get my dad back"
		}
	});
	
	logger.info('|||---===---|||');
	logger.info('Connected');
	logger.info('Logged in as: '+bot.username + ' - (' + bot.id + ')');
	logger.info('|||---===---|||');
});

//bot's "message" event
bot.on('message', function (user, userID, channelID, message, evt) {
	//check the first substring to be "T", and then process the text
	if (message.substring(0, 1) == 'T') {
		//make args the list of arguments
		var args = message.substring(1).split(' ');
		//first argument = command itself
		var cmd = args[0];
		//to be used later
		var param = args[1];
		args = args.splice(1);
		//switch to the command
		switch(cmd) {		
			case('blend'):
				if (param == 'undefined' || param == undefined) {
					param = 'A THING';
				};
				send(channelID, '***LOUD SCREAMING OF '+param+'***')
			break;
			case 'jakesapples' :
				send(channelID, 'Jake has ' + get.random_100 + ' apple(s)');
			break;
			case 'whoami' :
				send(channelID, 'this but is basic but i will try to make it good.basic'')
			break;
			case 'seriesisgay' :
				send(channelID, 'Im not subbed to pewdiepie nor t-series')
			break;
			case 'series' :
				send(channelID, 'आपकी माँ समलैंगिक इकाई है')
			break;
			case 'gay' :
				send(channelID, 'your gay level is ' + get.random_100() + '%')
			break;
			case 'uncensor' :
				send(channelID, 'Tf no u perv')
			break;
			case 'gimmepopcorn' :
				send(channelID, 'here u go :popcorn:')
			break;
			case 'whyamilikethis' :
				if ( userID > 396699211946655745) {
					send(channelID, 'true')
				} else {
					send(channelID, 'false'
				};
			break;
			case 'help' :
				send(channelID, '**Thelp**-shows this text\n**Tgimmepopcorn**-gives you popcorn\n**Tgay**-says how gay you are\n**Tuncensor**-uncensors an image\n**Tseries**-says something in Hindi\n**Tseriesisgay**-just see what happens\n**Tblend**-blends something\ni wont show the last command')
			break;
			case 'contact' :
				send(channelID, 'Contact my owner at 01010100#7782 on discord. Thanks to QeaML#5450 for help with coding.')
			break;
			case 'liedetector' :
				if (get.random_10() <= 5 ) {
					send(channelID, 'Lie detected!')
				} else {
					send(channelID, 'Truth detected!')
				};
			break;
			case('throw'):
				if (param == 'undefined' || param == undefined) {
					param = 'air';
				};
				send(channelID, user+' threw '+param+' off a bridge')
			break;
		}
	}
});
