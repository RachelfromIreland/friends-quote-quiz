/**
 * Event listener to trigger showQuiz when start button is clicked
 */
let startButton = document.getElementById("start-button");
try {
  startButton.addEventListener("click", showQuiz);
} catch (err) {
  console.error("There is a problem with the start button event listener");
}

/**
 * Function which hides welcome message and displays the quiz
 */
function showQuiz() {
  resetScores();

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
      "I can handle this. Handle's my middle name. Actually, it's the middle part of my first name.",
    ],
  },

  {
    friend: "Monica",
    quotes: [
      "And remember, if I'm harsh with you, it's only because you're doing it wrong.",
      "I've got this uncontrollable need to please people.",
      "Fine. I'd like to meet this chicken expert. Send the colonel in.",
      "Welcome to the real world. It sucks. You're gonna love it.",
      "Lips moving, still talking!",
    ],
  },

  {
    friend: "Joey",
    quotes: [
      " I'm curvy, and I like it",
      "Sup with the wack playstation, sup",
      "Look at me! I'm Chandler! could I be wearing any more clothes?",
      "(This friend) doesn't share food!",
      "Well, the fridge broke. So I had to eat everything.",
    ],
  },

  {
    friend: "Rachel",
    quotes: [
      "No uterus, no opinion.",
      "Oh, I'm sorry. Did my back hurt your knife?",
      "Oh, that's okay, girls tend to not like me.",
      "Everyone is getting married or pregnant or promoted and I'm getting coffee! \nAnd it's not even for me!",
      "Isn't that just kick-you-in-the-crotch, spit-on-your-neck fantastic?",
    ],
  },

  {
    friend: "Phoebe",
    quotes: [
      "Oh, I wish I could, but I don't want to.",
      "Something is wrong with the left phalange.",
      "They don't know that we know they know we know.",
      "See? He's her lobster!",
      "Meet Princess Consuela Banana Hammock",
    ],
  },

  {
    friend: "Ross",
    quotes: [
      "You-you-you-you threw my sandwich away? My sandwich? MY SANDWICH?!",
      "Ah. Humor based on my pain.",
      "I tell you, when I actually die, some people are going to get seriously haunted!",
      "WE WERE ON A BREAK!",
      "UBERWEISS! It's new, it's German, it's EXTRA TOUGH!",
    ],
  },
];

//Declaring array to be filled as questions are asked to prevent repeat questions in displayQuestion function
let questionsAsked = [];

//Declaring variable to check the friend matching the question matches the friend on the button clicked by the user
let activeQuestionCharacter;

//Declaring answer buttons to add an event listener
let answerButtons = document.getElementsByClassName("answer-button");

//Declaring variables for tracking progress and user message functions
let perfectScore = parseInt(document.getElementById("answers").innerText);
let questionCounter = 0;

//Declaring modal variables
let modalMessage = document.getElementById("modal-message");
let modal = document.getElementById("modal");
let modalCloseButton = document.getElementById("close-modal");

/**
 * Function to pick a character at random and then one of their quotes at random and display in the random quote div.
 * Also increments questionCounter variable by 1 and defines activeQuestionCharacter for use globally
 * Learned how to select a random element from the array from a post on geeksforgeeks - linked in README
 */
function displayQuestion() {
  let questionCharacter = quizInfo[Math.floor(Math.random() * quizInfo.length)];
  let randomQuote =
    questionCharacter.quotes[
      Math.floor(Math.random() * questionCharacter.quotes.length)
    ];

  //Checking to see if the quote has appeared before and generating a new one while hasQuoteRepeated is true
  while (
    hasQuoteRepeated(questionCharacter.friend, randomQuote, questionsAsked)
  ) {
    questionCharacter = quizInfo[Math.floor(Math.random() * quizInfo.length)];
    randomQuote =
      questionCharacter.quotes[
        Math.floor(Math.random() * questionCharacter.quotes.length)
      ];
  }

  //Push quotes that have been asked already into the questionsAsked array
  questionsAsked.push({
    questionCharacter: questionCharacter.friend,
    randomQuote: randomQuote,
  });

  //Add random quote text to quote div, assign friend from question to activeQuestionCharacter variable, and increment questionCounter variable by one
  let quoteDiv = document.getElementById("random-quote");
  quoteDiv.innerHTML = randomQuote;

  activeQuestionCharacter = questionCharacter.friend;

  ++questionCounter;
}

/**
 * Function to check if the quote is in the questionsAsked array and so has been asked already
 */
function hasQuoteRepeated(friend, quote, questionsAsked) {
  for (let i = 0; i < questionsAsked.length; i++) {
    if (
      questionsAsked[i].questionCharacter === friend &&
      questionsAsked[i].randomQuote === quote
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Code for answer button event listener
 * Adding event listeners to class learned from a blog post from Borislav Hadzhiev - linked in README
 */
try {
  for (let answerButton of answerButtons) {
    answerButton.addEventListener("click", function () {
      checkAnswer(answerButton.innerText, activeQuestionCharacter);
    });
  }
} catch (err) {
  console.error("The answer button event listener isn't working.");
}

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
  try {
    if (userAnswer === answer) {
      userMessage(`That's right! That was ${answer}!`);
      addScore();
    } else {
      userMessage(
        `Whoops, ${answer} said that! Maybe you need another rewatch of Friends!`
      );
      addWrongAnswer();
    }

    progress();
  } catch (err) {
    console.error("There is an error with checkAnswer");
  }
}

/**
 * Function to keep asking questions until the user answers 10 questions
 */
function progress() {
  if (questionCounter < 10) {
    displayQuestion();
  } else if (perfectScore === 10 && questionCounter === 10) {
    tenForTen();
  } else {
    quizOver();
  }
}

/**
 * Displays end of quiz alert after 10 correct answers
 */
function quizOver() {
  userMessage(
    `Well done! You've reached the end of the quiz! You got ${perfectScore} right out of ${questionCounter}! That's one question for every season of Friends!  Click or tap anywhere on the screen to play another round!`
  );
  beginAgain();
}

/**
 * User gets this alert if they get ten out of ten
 */
function tenForTen() {
  userMessage(
    `WOW! You got ${perfectScore} out of ${questionCounter}! That's a perfect score!  Monica would be so proud!  Click or tap anywhere on the screen to play another round!`
  );

  beginAgain();
}

/**
 * Reset questionCounter and perfectScore variables to 0 and text inside scores Div to 0 for each
 */
function resetScores() {
  questionCounter = 0;
  perfectScore = 0;

  document.getElementById("answers").innerText = "0";
  document.getElementById("wrong-answers").innerText = "0";
}

/**
 * Call reset scores function and display welcome message to begin quiz again.  Reset questionsAsked to an empty array
 */
function beginAgain() {
  resetScores();

  document.getElementById("welcome").style.display = "block";
  document.getElementById("quiz").style.display = "none";

  questionsAsked = [];
}

// Functions for modal, learned from a W3Schools article - Link in README
/**
 * Function to display different messages to the user, functions like an alert when called
 */
function userMessage(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

/**
 * Click event for the close button to hide the modal when clicked
 */
modalCloseButton.onclick = function () {
  modal.style.display = "none";
};

/**
 * Click event so the user can just click the window to close the modal
 */
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
