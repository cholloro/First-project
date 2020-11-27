var readlineSync = require("readline-sync");
var chalk = require("chalk")

var score = 0;

var userName = (readlineSync.question("What's your name? "));

console.log(chalk.green("Welcome "+ userName + " to DO YOU KNOW Tanay?"));
// high score
var highScores = [
  {
    name: "Tanay",
    score: 10,
  },
  {
    name: "Arya",
    score: 10,},]

// play function
function play(question, answer) {
  var userAns = readlineSync.question(question);
  
  if (userAns.toUpperCase() === answer.toUpperCase())
  {

    console.log(chalk.red("Right"));
    score = score+1;
  } else {
    console.log(chalk.yellow("wrong!"));

  }
console.log(chalk.yellowBright("current score: ", score));
}
// array of objects
var questions = [{question: "Where do I live? ",
  answer: "Bangalore"
}, {question: "My favorite superhero would be? ",
  answer: "Dhruv"},
{question: "Where do I work? ",
  answer: "Microsoft"}];
// loop
for (var i=0; i<questions.length; i++) {
  var curQuestion = questions[i];
  play(curQuestion.question, curQuestion.answer)
}

console.log(chalk.green("yassss! You scored: ", score));

console.log(chalk.green("see the scores"))
