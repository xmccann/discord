// our first test bot

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!hi') {
		message.channel.send('I can tell jokes and play ping-pong.  Just type \'!tell me a joke\', \'!ping\' or \'!pong\'.');
	}
	else if (message.content === '!tell me a joke') {
		message.channel.send('Did you hear that the Governor’s mansion in Alabama burned down? It pretty much took out the whole trailer park.');
	}
	else if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
	else if (message.content === '!pong') {
		// send back "Ping." to the channel the message was sent in
		message.channel.send('Ping.');
	}
});

// login to Discord with your app's token
client.login('Njc5MDE1NTE0NzY0MjE0Mjcy.XkrOKw.0XYk5pyZv2cgQUtvOxiVDGDgFoU');
