![Header and Logo Screenshot](/documents/header-screenshot.png)

The **Friends Quote Quiz** is a short quiz in which the user guesses which of the six main characters of Friends said a randomly generated quote.  

The quiz ends after the user answers 10 questions – one for every season of Friends!  There are a mix of quotes, totalling five for each character ranging from very well-known to some lesser-known one-liners.  This means anyone who knows of the show has a chance at getting some points. 

The site can be accessed by this [link](https://rachelfromireland.github.io/friends-quote-quiz/).

![Responsive Mockup Image](/documents/mockup-image.png)

## Contents

* [User Stories](#user-stories)
* [Features](#features)
* [Design](#design)
* [Testing](#testing)
    * [Manual Testing](#manual-testing)
    * [Validator Testing](#validator-testing)
* [Technologies Used](#technologies-used)
* [Deployment](#deployment)
* [Credits](#credits)
* [Tools](#tools)

    

## User Stories

### First Time Visitor Goals:
- As a First Time Visitor, I want to understand the site’s main purpose at a glance.
- As a First Time Visitor, I want the quiz to be easy to read and intuitive to navigate to ensure a pleasant user experience.
- As a First Time Visitor, I want to see clearly whether my answers are correct or incorrect.
- As a First Time User, I want to have my score counted so I can focus on the questions.

### Returning Visitor Goals:
- As a Returning Visitor, I want to see different questions to keep me interested in the quiz.
- As a Returning Visitor, I want to feel accomplished if I get every question correct.
- As a Returning Visitor, I want the quiz to be engaging enough for me to take it multiple times.


## Features

### The Quiz Heading
-The heading is featured at the top of the page.  As soon as the site loads the user can see the name of the game.  This remains in place for the duration of the quiz.  It, as well as the rest of the quiz, has a responsive design.  Here it is for mobile:

![Mobile Header Screenshot](/documents/mobile-header-screenshot.png)

### The Welcome Message

- Displays when the page loads.
- Contains instructions for the quiz followed by a Start Quiz button which begins the quiz.
- The Welcome Message is hidden after clicking the Start button.

![Welcome Message Screenshot](/documents/welcome-message-screenshot.png)

### The Quiz Page
- Displays after the user clicks the start button.  

![Quiz Page Screenshot](/documents/quiz-page-screenshot.png)

#### The Quote Area
- Displays a randomly generated quote from friends.  This quote serves as a quiz question.
- Because the quote is random this means no two quiz rounds are the same and the user can have a different experience each time.

![Quote Screenshot](/documents/quote-screenshot.png)

#### The Answer Buttons
- There is one button for each character.  Each character serves as a possible answer.
- Each button contains the character's name and an image, so infrequent viewers of the show can still play without knowing each character’s name.
- Clicking a button will trigger a message telling the user whether they were correct or not and generate a new quote.

![Answer Buttons on Screenshot](/documents/answer-buttons.png)

#### The Score Area
- Has score totals for correct and incorrect answers at the bottom which keep the score as new quotes are generated.
- The score resets every time a new quiz is started.

![Score Area Screenshot](/documents/scores-screenshot.png)

#### Messages for the User
- The quiz uses modal popups to communicate with the user.  The popups can be closed by clicking anywhere on the screen for accessibility.
- The popups appear after each question to inform the user if they were correct or incorrect, and if incorrect it lets them know the correct answer.

![Answer Message Popup Screenshot](/documents/answer-message.png)

- They also appear at the end of the quiz to inform the user of their score, and to inform them that clicking anywhere on the screen will start the quiz again.  

![End of Quiz Message Popup Screenshot](/documents/finish-message.png)

- The messages on the models are controlled by the "userMessage" function in Javascript and so function similarly to alerts but with visuals more aligned with the quiz itself.

## Design
### Wireframes
The layout was intended to be simple, and very few changes were made to the wireframe design. Below is the draft of how the welcome message would look.

![Screenshot of Welcome Message Wireframe](/documents/welcome-wireframe.png)

And when you clicked start the quiz itself would be visible.

![Screenshot of Quiz Wireframe](/documents/wireframe-quiz.png)

Below is a mockup of how the alert would look, this was changed to a modal and the size depended on the size of the message itself.

![Screenshot of Alert Wireframe](/documents/wireframe-with-alert.png)



### Color Scheme
The color scheme was chosen to remind the user of the colors used in the show and to make the page attractive to the user.
#### Color palette 
The specific color palette used on the website was adapted from one found on [Pinterest](https://www.pinterest.ie/pin/344877283958852981/).

![Screenshot of Color Palette](/documents/colors-screenshot.png)


## Typography
### Main Font

![Main Font Screenshot](/documents/rubik-font-screenshot.png)

Rubik from Google Fonts was used as the main font of the website to ensure maximum readability for the user.
### Logo Font

![Logo Font Screenshot](/documents/gloria-font-screenshot.png)

Gloria Hallelujah from Google Fonts was used in the header and buttons as well as any time the show's name was mentioned as it bears a close resemblance to the show's font.

 ## Testing

### Manual Testing
#### Testing User Stories: First Time Visitors
| User Goal | How It Is Achieved |
| ---| ---|
| As a First Time Visitor, I want to understand the site’s main purpose at a glance. | The heading is clear and states the name of the site; it is noticeable immediately on loading the site.  While the font being similar to the Friends logo font helps users mentally connect the quiz with the show. |
| As a First Time Visitor, I want the quiz to be easy to read and intuitive to navigate to ensure a pleasant user experience. | The quiz features contrasting colours and a large font.  The answer buttons contain images of each character and the modal messages can be closed by clicking anywhere on screen for maximum accessibility. |
| As a First Time Visitor, I want to see clearly whether my answers are correct or incorrect. | The modal displays a message to the user as soon as they click an answer button.  The message itself is brightly coloured and has text in an easy to read font and alerts the user if they are correct or incorrect.  If incorrect, the user is told the correct answer. |
| As a First Time User, I want to have my score counted so I can focus on the questions. | There are counters immediately below the answer button displaying the number of correct and incorrect answers the user has accumulated so far. |

#### Testing User Stories: Returning Visitors
| User Goal | How It Is Achieved |
| ---| ---|
| As a Returning Visitor, I want to see different questions to keep me interested in the quiz. | The quiz has 30 quotes and is 10 questions long.  Each quote is randomly generated so the quiz will be different each time it’s taken. |
| As a Returning Visitor, I want to feel accomplished if I get every question correct. | There is a special alert message for any user who gets a perfect score with a reference to the show. |
| As a Returning Visitor, I want the quiz to be engaging enough for me to take it multiple times. | With a plenty of quotes to be generated and different user messages depending on circumstance, the quiz can be engaging to infrequent viewers of the show as they learn who said each quote, or a fun challenge to regular viewers as they try to get a perfect score. |

#### Full Testing

Full Testing was performed on the following physical devices, with additional testing for different screen sizes carried out using developer tools.  Media Queries for responsiveness performed as planned and the site adapts to different screen sizes.

##### Devices Tested:
- 12” Macbook
- iPad Pro 2021
- Windows PC with 32” Monitor
- Poco M4 Pro
- Galaxy z-Flip 4
- Windows laptop 17”

Each device tested the site using the following browsers:
Firefox and Google Chrome on Mac, Windows and mobile, Safari on iPad.

#### Functionality Tests
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ---| ---| ---| ---| ---|
| Start Quiz Button Hover | Hovering over the button will invert the text/border color with the background color. | Hovered over the Start Quiz button. | The colors invert as expected as soon as the mouse hovers. | Pass |
| Start Quiz Button | Clicking the button will start the quiz. It will also reset the user’s score in the event they are starting again after finishing the quiz. | Clicking on the start quiz button.  Console logging the scores figures when the function is called while testing to check they are reset. | Clicking on the Start Quiz button will display the quiz complete with a quote, and scores are reset to zero. | Pass |
| Quote Area | A quote will be generated at random and displayed, the user will only see each quote once per quiz. The number of questions asked will be recorded as the question counter variable each time the "displayQuestion" function is triggered. | Clicking the start quiz button and subsequently on the answer buttons until the quiz had finished, repeated the process multiple times.  Logging questions asked array to the console to ensure questions were recorded to avoid repeats. Logged activeQuestionCharacter to the console to ensure the character matched the quote being said. Logged questionCounter to the console to ensure the number increased by 1 each time. | A new quote is generated each time the start or answer buttons are pressed.  This quote is generated at random and once generated it will not be repeated during the ten questions of the quiz. | Pass |
| Answer Buttons | The user will receive a message informing them whether they were correct or incorrect and the relevant score total will increase by 1.  The quiz ends after 10 clicks of the answer button, so ten questions. | Code was initially written with alerts stating “Correct” and “Incorrect”.  Went through several questions answering with a mixture of correct and incorrect answers and watching both the score and the alert message.  Took the quiz several times to check it ended at the correct point. | The relevant score is increased by 1 and the alert message correctly displayed whether the answer was correct or incorrect. The quiz ended each time after the tenth question. | Pass |
| Answer Buttons Hover | Hovering over the button will invert the font color and the font outline/border color. | Hovered mouse over each answer button | The colors invert as expected as soon as the mouse hovers. | Pass |
| Modal Messages to the user | Modals will act in the same way as alerts did throughout testing but will look more visually pleasing to the user, and will display the relevant message after answering each question. | Commented out alert messages and added Modals in their place.  Took the quiz multiple times to check the modal message matched the alert. | The correct messages were generated and displayed matching the CSS styles applied to them. | Pass |
| Scores Area | The relevant scores figure will increment by 1 as each question is answered and reset if the user takes the quiz again. | Logged scores variables to the console before attaching them to the relevant HTML elements, once attached took the quiz while checking the console to see if HTML text matched console text. | Scores increment correctly and reset to zero when a new quiz is started | Pass |

### Solved Bugs
| Bug | Solution |
| ---| ---|
| The quiz was generating some quotes multiple times in one quiz, sometimes one after the other.  This would confuse the listener. | Solution: As quiz is generated randomly from the quizData array, needed a way to track which questions had been asked and avoid repeats.  Created an empty array within the displayQuestion function.  Created a hasQuoteRepeated function to return true if the question and character were present in this array, and called this function in the displayQuestion function in a while loop.  This loop would generate another quote if the hasQuoteRepeated function returned true.  Then added .push() to add the quote and the character into the new array.  This is then reset later in the code so the array is empty if the user retakes the quiz.  Tested this method by logging the array to the console and ensuring there were no repeats. |
| Upon first running the quiz clicking an answer button would display multiple alerts of “Correct” or “Incorrect”, one for every question answered so far after loading the quiz. | Removed the answer button event listener from inside the displayQuestion function and instead declared it globally, this stopped alerts from being added to the button each time displayQuestion was called and the correct alert was displayed. |
| Adding images into the HTML answer button elements resulted in the event listeners and functions not working. | After trying to solve the issue with Javascript and being unable to have every function work as expected, I instead removed the images from the HTML elements and added them as background images in CSS and pushed the character names down for better readability.  This resulted in everything working as intended. |

### Validator Testing
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/).
  - An image of the result can be found [here](/documents/html-validator.png).
- CSS
    - No errors were found when passing through the official [(Jigsaw)](https://jigsaw.w3.org/css-validator/) validator.
    - An image of the result can be found [here](/documents/css-validator.png).
- JavaScript
    - No errors were found when passing through the official [Jshint](https://jshint.com/) validator
        - The following metrics were returned:
            - "There are 15 functions in this file."
            - "Function with the largest signature takes 3 arguments, while the median is 0."
            - "Largest function has 10 statements in it, while the median is 3."
            - "The most complex function has a cyclomatic complexity value of 4 while the median is 1."
    -An image of the result can be found [here](/documents/jshint-validator.png).
- Accessibility
        - The site was tested for accessibility using Lighthouse.  The results are below:

![Lighthouse Scores Screenshot](/documents/lighthouse-screenshot.png)


## Technologies Used
- HTML was used as the foundation of the site.
- CSS - was used to add the styles and layout of the site.
- Javascript was used to run the site, hiding the welcome message and running the quiz.
- VSCode was used as the main tool to write and edit code.
- Git was used for the version control of the website.
- GitHub was used to host the code of the website.

## Deployment
### Deployment to GitHub Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Main Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://rachelfromireland.github.io/friends-quote-quiz/).

### Local Deployment

To make a local copy of this project, you can clone it. In your IDE Terminal, type the following command to clone my repository:

git clone https://github.com/RachelfromIreland/friends-quote-quiz.git

## Future improvements
- In the future, I would like to be able to implement a feature that tracks the user scores if multiple quiz rounds are taken.

## Credits
### Content
- The random element selection in the "displayQuestion" function was formatted with help from [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/).
- I learned how to add an event listener to elements by class after reading a blog post by [Borislav Hadzhiev](https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class).
- I learned how to add a border to a font using webkit-text-stroke after reading this question submitted on [StackOverFlow](https://stackoverflow.com/questions/2570972/css-font-border).

- The HTML, styling and functions of the modal messages were inspired by an article on [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) after testing showed alerts didn't fit the style of the quiz.

### Media
All images for the character buttons were taken from the Television and Film Character Encyclopaedia Site:

[Monica Geller Image](https://www.tafce.com/index.php?title=Monica_Geller)

[Phoebe Buffay Image](https://www.tafce.com/index.php?title=Phoebe_Buffay)

[Joey Tribbiani Image](https://www.tafce.com/index.php?title=Joey_Tribbiani) 

[Rachel Green Image](https://www.tafce.com/index.php?title=Rachel_Green) 

[Ross Geller Image](https://www.tafce.com/index.php?title=Ross_Geller) 

[Chandler Bing Image](https://www.tafce.com/index.php?title=Chandler_Bing) 

The logo and favicon image were a free download from HiClipArt.

[Favicon and Logo Image](https://www.hiclipart.com/free-transparent-background-png-clipart-jzfzc/)

## Tools
- Paint 3D was used to make all character images the same size.
- [W3Schools](https://www.w3schools.com) was an invaluable resource for problem-solving.
- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) was a good resource to ensure I was using Flexbox correctly.
- The responsive mockup image was generated using [TechSini](https://techsini.com/multi-mockup/index.php).
- The wireframes for the project were created using [Wireframe|cc](https://wireframe.cc/).
