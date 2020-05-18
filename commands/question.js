const { setScore, addUser, removeQuestion, getQuestions,clearUsers, getUsers, getQuestionIsAsked, setQuestionIsAsked, getScore } = require('./variables');
//filtering right answers and setting the scores
filter=(response)=>{
  //check if the user is the bot
   if (response.author.id==='709751828186791966') return;
   //check if a user accidentally sent "question command instead of answer"
   if (response.content==="question") return;
  if(!['holt','!holt'].includes(response.content)) return;
   //checking if a user already answered the question
   let users=getUsers();
   if (users.includes(response.author.id)){
     msg.reply(`${response.author} No backsies`)
     return false;
   }
   else{
     //adding the user to the list of people who answered
     addUser(response.author.id)
     let result=item.answer=== response.content
     let intResult=result? 1 : 0;
     //adding score to the score list
     score=getScore();
     setScore(response.author,intResult)
     return result ;
   }
}
let item={}
module.exports = {
    name: 'question',
    description: 'Ask a question!',
    execute(msg, args) {
      //check if there's already an answered question
      if (getQuestionIsAsked()) return;
      setQuestionIsAsked();
      //resetting users
      clearUsers();
      let questions=getQuestions();
      if (questions.length===0){
        setQuestionIsAsked();
        return msg.channel.send("Peralta that's enough \n End of quiz");
      }
      const index=Math.floor(Math.random()*questions.length)
      item = questions[index];
      removeQuestion(index);
      return (msg.channel.send(`Did holt say: ${item.question}`).then(() => {
            msg.channel.awaitMessages(filter, { max: 100, time: 15000, errors: ['time'] })
          .then(collected => {
          })
        .catch(collected => {
          if (collected.first())
          {
            collected.map(item=>{
              msg.channel.send(`${item.author} got the correct answer!`)
            })
          }
          else{
            msg.channel.send('Looks like nobody got the answer this time.');
          }
          setQuestionIsAsked();
        })}
        )
        )
      }
    }