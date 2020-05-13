module.exports = {
  name: 'answer',
  description: 'Ping me!',
  execute(msg, args) {
    //msg.reply('pong',args);
    msg.channel.send(`pong ${args}`);
  },
};
