const {startGame} = require('./variables');
module.exports = {
    name: 'start',
    description: 'start quiz!',
    execute(msg, args) {
      startGame()
      msg.channel.send(`Ain't no party like a Captain Holt party! `);
      msg.channel.send('Question :');
    },
  };
  