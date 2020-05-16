//I put most used variables here 
const quiz = require('../questions/questions.json');
//score of players 
let score={}
//if there's a question asked (to avoid having two questions in a row before timeout)
let questionIsAsked=false;
//list of users who answered the question
let users=[];
let gameOn=false;
resetQuiz=()=>{
  return Array(quiz.length).fill().map((_, idx) => quiz[idx])
}
let questions=resetQuiz()
module.exports = {
    isGameOn:()=>gameOn,
    startGame:()=>gameOn=true,
    endGame:()=>gameOn=false,
    getScore:   () => score,
    clearScore: () => score={},
    setScore:(user,value)=>{
      if(user in score){
        score[user]=score[user]+value;
      }
    else{
        score[user]=value;
      }
    },
    getQuestions: ()=>questions,
    removeQuestion:(index)=>questions.splice(index,1),
    resetQuestions:()=>questions=resetQuiz(),
    getUsers:()=>users,
    addUser:(user)=>users.push(user),
    clearUsers:()=>users=[],
    getQuestionIsAsked:()=>questionIsAsked,
    setQuestionIsAsked:()=>questionIsAsked=!questionIsAsked,
  };

