const questionEl = document.getElementById('questionBox')
const listEL = document.querySelectorAll('.choices')
let currentIndex = 0
// console.log(listEL)



const questionsArr= [
    {
       question: "Which player was a rising sensation at Sporting Lisbon and beat Manchester United promting them to buy him?",
       choices: ['Pogba', 'Figo','Puska','Ronaldo'],
       correct_Answer: 3
    },
    {
        question: "Which player was a rising sensation at Sporting Lisbon and beat Manchester United promting them to buy him?",
        choices: ['Pogba', 'Figo','Puska','Ronaldo'],
        correct_Answer: 3
     },
     {
        question: "Which player was a rising sensation at Sporting Lisbon and beat Manchester United promting them to buy him?",
        choices: ['Pogba', 'Figo','Puska','Ronaldo'],
        correct_Answer: 3
     },
     {
        question: "Which player was a rising sensation at Sporting Lisbon and beat Manchester United promting them to buy him?",
        choices: ['Pogba', 'Figo','Puska','Ronaldo'],
        correct_Answer: 3
     },
    ]

questionEl.textContent= questionsArr[0].question;
// console.log(questionEl)
listEL.textContent = questionsArr[0].choices
// console.log(listEL)




