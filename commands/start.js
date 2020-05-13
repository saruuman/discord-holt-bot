module.exports = {
    name: 'start',
    description: 'start quiz!',
    execute(msg, args) {
      //msg.reply('pong',args);
      msg.channel.send(`Ain't no party like a Captain Holt party! `);
      msg.channel.send('Question :');
    },
  };
  