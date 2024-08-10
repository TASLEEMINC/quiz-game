## User Stories

1. As a user I want to open a browser game named "Quiz Game"
   - HTML document with a nice background and layout of the elements, buttons
2. Once I open the game, it should describe the game and rules.
3. The game should warn about time restriction for each question.
4. It should have a nice outlook with inviting decoration and with a "start" button to start the game.
5. Any buttons pressed should play a sound and activate an action.
6. Correct answers should be highlighted in green and wrong ones in red;
7. Wrong answers should make 'wrong' sounds
8. I would like to see my score at the end of the game;

## Pseudocode

Defining array of objects. Each object will have 3 properties
for question, options and answer.

Declare:

Variables and cached elements;

Create functions:

- for timer;
- for music in the background;
- for displaying questions;
- for checking answers;
- for the next question;
- for ending the quiz;

Create buttons:

- Buttons to select the answer;
- Button to proceed to the next question;
- Button to restart the quiz game;

When time is up and no more questions left, the game should end and the score has to be displayed
