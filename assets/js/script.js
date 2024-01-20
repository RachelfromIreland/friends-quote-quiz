/**
 * Event listener to trigger showQuiz when start button is clicked
 */
let startButton = document.getElementById("start-button");
startButton.addEventListener('click', showQuiz)

/**
 * Function which hides welcome message and displays the quiz
 */
function showQuiz() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  displayQuestion();
}

/**
 * Data for quiz, five quotes per character
 */
const quizInfo = [
  {
    friend: "Chandler",
    quotes: [
      "I'm funny, right? What do you know? You're a door. You only like knock-knock jokes.",
      "I'm a gym member. I try to go four times a week, but I've missed the last... twelve-hundred times.",
      "I tend to keep talking until somebody stops me.",
      "You know, on second thought, gum would be perfection.",
      "I can handle this. Handle's my middle name. Actually, it's the middle part of my first name."
    ],
  },

  {
    friend: "Monica",
    quotes: [
      "And remember, if I'm harsh with you, it's only because you're doing it wrong.",
      "I've got this uncontrollable need to please people.",
      "Fine. I'd like to meet this chicken expert. Send the colonel in.",
      "Welcome to the real world. It sucks. You're gonna love it.",
      "Lips moving, still talking!"
    ],
  },

  {
    friend: "Joey",
    quotes: [
      " I'm curvy, and I like it",
      "Sup with the wack playstation, sup",
      "Look at me! I'm Chandler! could I be wearing any more clothes?",
      "(This friend) doesn't share food!",
      "Well, the fridge broke. So I had to eat everything."
    ],
  },

  {
    friend: "Rachel",
    quotes: [
      "No uterus, no opinion.",
      "Oh, I'm sorry. Did my back hurt your knife?",
      "Oh, that's okay, girls tend to not like me.",
      "Everyone is getting married or pregnant or promoted and I'm getting coffee! \nAnd it's not even for me!",
      "Isn't that just kick-you-in-the-crotch, spit-on-your-neck fantastic?"
    ],
  },

  {
    friend: "Phoebe",
    quotes: [
      "Oh, I wish I could, but I don't want to.",
      "Something is wrong with the left phalange.",
      "They don't know that we know they know we know.",
      "See? He's her lobster!",
      "Meet Princess Consuela Banana Hammock"
    ],
  },

  {
    friend: "Ross",
    quotes: [
      "You-you-you-you threw my sandwich away? My sandwich? MY SANDWICH?!",
      "Ah. Humor based on my pain.",
      "I tell you, when I actually die, some people are going to get seriously haunted!",
      "WE WERE ON A BREAK!",
    ],
  },
];

let questionCounter = 0;

/**
 * Function to pick a character at random and then one of their quotes at random and display in the random quote div.
 * Also increments questionCounter variable by 1 and defines activeQuestionCharacter for use globally
 */
function displayQuestion() {
  let questionCharacter = quizInfo[Math.floor(Math.random() * quizInfo.length)];
  let randomQuote =
    questionCharacter.quotes[
      Math.floor(Math.random() * questionCharacter.quotes.length)
    ];

  let quoteDiv = document.getElementById("random-quote");

  quoteDiv.innerHTML = randomQuote;

  activeQuestionCharacter = questionCharacter.friend;

  ++questionCounter;
}

let activeQuestionCharacter;

/**
 * Code for answer button event listener
 */
let answerButtons = document.getElementsByClassName("answer-button");

for (let answerButton of answerButtons) {
  answerButton.addEventListener("click", function () {
    checkAnswer(answerButton.innerText, activeQuestionCharacter);
  });
}

let perfectScore = parseInt(document.getElementById("answers").innerText);

/**
 * Increments score by 1 when called
 */
function addScore() {
  let score = parseInt(document.getElementById("answers").innerText);
  document.getElementById("answers").innerText = ++score;
  ++perfectScore;
}

/**
 * Increments wrong answers by 1 when called
 */
function addWrongAnswer() {
  let incorrectScore = parseInt(
    document.getElementById("wrong-answers").innerText
  );
  document.getElementById("wrong-answers").innerText = ++incorrectScore;
}

/**
 * Checks if the user's answer matches the character from the data array and increment relevant score total
 */
function checkAnswer(userAnswer, answer) {
  if (userAnswer === answer) {
    alert(`That's right! That was ${answer}!`);
    addScore();
  } else {
    alert(
      `Whoops, ${answer} said that! \nMaybe you need another rewatch of Friends!`
    );
    addWrongAnswer();
  }

  progress();
}

/**
 * Function to keep asking questions until the user gets a score of 10
 */
function progress() {
  if (perfectScore < 10) {
    displayQuestion();
  } else {
    quizOver();
  }
}

/**
 * Displays end of quiz alert after 10 correct answers
 */
function quizOver() {
  alert(
    `Well done! You've reached the end of the quiz!  You got ${perfectScore} right out of ${questionCounter}! \nThat's one right for every season of Friends!`
  );
}
