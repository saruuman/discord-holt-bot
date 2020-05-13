const {getScore,clearScore,resetQuestions } = require('./variables');
module.exports = {
    name: 'peralta',
    description: 'End game and get the scores!',
    execute(msg,args) {
        if (args.includes('enough')){
            let score=getScore()
            let scoreArray=[]
            Object.keys(score).forEach(item=>{
                scoreArray.push(`${item} ${score[item]}`)
            })
            resetQuestions()
            clearScore()
            return (
                msg.channel.send(`Well done squad, your quiz scores are: ${scoreArray}`)
            )
        }
        return;
    },
  };
  