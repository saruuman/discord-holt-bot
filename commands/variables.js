//I put most used variables here 
const quiz = require('../questions/questions.json');
let score={}
let questionIsAsked=false;
let users=[];
resetQuiz=()=>{
  return Array(quiz.length).fill().map((_, idx) => quiz[idx])
}
let questions=resetQuiz()
module.exports = {
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

