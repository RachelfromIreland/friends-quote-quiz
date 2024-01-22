![Header and Logo Screenshot](/documents/header-screenshot.png)

The **Friends Quote Quiz** is a short quiz in which the user guesses which of the six main characters of Friends said a randomly generated quote.  

The quiz ends after the user answers 10 questions – one for every season of Friends!  There are a mix of quotes, totalling five for each character ranging from very well-known to some lesser-known one-liners.  This means anyone who knows of the show has a chance at getting some points. 

The site can be accessed by this [link](https://rachelfromireland.github.io/friends-quote-quiz/).

![Responsive Mockup Image](/documents/mockup-image.png)

## User Stories

### First Time Visitor Goals:
- As a First Time Visitor, I want to understand the site’s main purpose at a glance.
- As a First Time Visitor, I want the quiz to be easy to read and intuitive to navigate to ensure a pleasant user experience.
- As a First Time Visitor, I want to see clearly whether my answers are correct or incorrect, and have my score counted so I can focus on the questions.

### Returning Visitor Goals:
- As a Returning Visitor, I want to see different questions to keep me interested in the quiz.

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
- Clicking a button will trigger an alert telling the user whether they were correct or not and generate a new quote.

![Answer Buttons on Mobile Screenshot](/documents/mobi-answer-buttons.png)

#### The Score Area
- Has score totals for correct and incorrect answers at the bottom which keep the score as new quotes are generated.
- The score resets every time a new quiz is started.

![Score Area Screenshot](/documents/scores-screenshot.png)

#### Messages for the User
- The quiz uses modal popups to communicate with the user.  The popups can be closed by clicking anywhere on the screen for accessibility.
- The popups appear after each question to inform the user if they were correct or incorrect, and if incorrect then who said the quote.

![Answer Message Popup Screenshot](/documents/answer-message.png)

- They also appear at the end of the quiz to inform the user of their score, and to inform them that clicking anywhere on the screen will start the quiz again.  

![End of Quiz Message Popup Screenshot](/documents/finish-message.png)

- The messages on the models are controlled by the "userMessage" function in Javascript and so function similarly to alerts but with visuals more aligned with the quiz itself.

## Testing
> (REWRITE PRIOR TO SUBMITTING AFTER MENTOR CALL) Each function tested as written, using console.log for complex ones and the function in full for shorter ones.  Frequently opened index.html in live server to ensure everything was working as intended and made changes as needed.  Eg. removed event listener from inside display question function and added globally as the alert for every question answered was being added to the button each time, globally adding the event listener fixed this.  Adding images to character buttons broke javascript so added them as background image instead and learned how to add font borders and push button text down to see character names better then.  Changed quiz end from 10 correct answers to 10 questions after feedback from partner and family that it can take a long time to get 10 right.

### Validator Testing
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/).
- CSS
    - No errors were found when passing through the official [(Jigsaw)](https://jigsaw.w3.org/css-validator/) validator
- JavaScript
    - No errors were found when passing through the official [Jshint](https://jshint.com/) validator
        - The following metrics were returned:
            - "There are 14 functions in this file."
            - "Function with the largest signature takes 2 arguments, while the median is 0."
            - "Largest function has 6 statements in it, while the median is 2.5."
            - "The most complex function has a cyclomatic complexity value of 4 while the median is 1."
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

## Design
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

## Deployment to GitHub Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Main Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://rachelfromireland.github.io/friends-quote-quiz/).

## Future improvements
- In the future, I would like to be able to implement a feature that tracks the user scores if multiple quiz rounds are taken.
- I would also like to prevent quotes from showing up more than once in the same quiz.  As it is random two identical quotes can occasionally generate one after the other, which could potentially confuse users.

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

