/**
 * Function which hides welcome message and displays the quiz
 */
function showQuiz() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    displayQuestion();
}

/**
 * Data for quiz, three quotes per character
 */

const quizInfo = [
    {friend: 'Chandler', 
    quotes: ["I'm funny, right? What do you know? You're a door. You only like knock-knock jokes.", "I'm a gym member. I try to go four times a week, but I've missed the last 1200 times.", "I tend to keep talking until somebody stops me."] },

    {friend: 'Monica', 
    quotes: ["And remember, if I'm harsh with you, it's only because you're doing it wrong.", "I've got this uncontrollable need to please people.", "Fine. I'd like to meet this chicken expert. Send the colonel in."] },

    {friend: 'Joey', 
    quotes: [" I'm curvy, and I like it", "Sup with the wack playstation, sup", "Look at me! I'm Chandler! could I be wearing any more clothes?"] },

    {friend: 'Rachel', 
    quotes: ["No uterus, no opinion.", "Oh, I'm sorry. Did my back hurt your knife?", "Oh, that's okay, girls tend to not like me."] },

    {friend: 'Phoebe', 
    quotes: ["Oh, I wish I could, but I don't want to.", "Something is wrong with the left phalange.", "They don't know that we know they know we know."] },

    {friend: 'Ross', 
    quotes: ["You-You-You... You threw my sandwich away...", "Ah. Humor based on my pain.", "I tell you, when I actually die, some people are going to get seriously haunted!"]}
];

/**
 * Function to pick a character at random and then one of their quotes at random and display in the random quote div.  
 */

//Might need to try another way, trying this first because might need to be able to pull character name to detect right/wrong answer ****DELETE COMMENT WHEN SURE*****
function displayQuestion() {
    let questionCharacter = quizInfo[(Math.floor(Math.random() * quizInfo.length))];
    let randomQuote = questionCharacter.quotes[(Math.floor(Math.random() * questionCharacter.quotes.length))];

    let quoteDiv = document.getElementById("random-quote");

    quoteDiv.innerHTML = randomQuote;

};
//Cut and paste this section inside function, not working outside ****REMOVE COMMENT WHEN DONE****
let answerButtons = document.getElementsByClassName('answer-button');
for (let answerButton of answerButtons) {
    answerButton.addEventListener('click', checkAnswer(answerButton.innerText, questionCharacter.friend));
}

function checkAnswer(userAnswer, answer) {
    if (userAnswer === answer) {
        alert(`That's right! ${answer} said that line!`)
    } else {
        alert(`Whoops, ${answer} said that line, maybe you need another rewatch of Friends!`)
    }
}
