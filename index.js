require('dotenv').config();
const {isGameOn}=require('./commands/variables')
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);


bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', msg => {
  const gameOn=isGameOn()
  const args = msg.content.toLowerCase().split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);
  console.info(args)
  if (!bot.commands.has(command)) return;

  try {
    if (command==='start' ||gameOn) bot.commands.get(command).execute(msg, args);
  }
    catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
