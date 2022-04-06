//variables for all the different screens
var startScreen = document.querySelector("#starting-screen");
var questionsScreen = document.querySelector("#questions-screen");
var endingScreen = document.querySelector("#ending-screen");
var hiscoreScreen = document.querySelector("#hiscore-screen");

//variable for all the buttons
var startButton = document.querySelector("#start-button");
var scoresButton = document.querySelector("#high-scores");
var gobackButton = document.querySelector("#go-back");

//variables for the question and buttons for answers
var theQuestion = document.querySelector("#the-question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

//variables for elements from the html
var confirmation = document.querySelector("#confirmation");
var timeLeft = document.querySelector("#time-left");

var questionNumber = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var secondsLeft = 12;
var finalScore = 0;

var allQuestions = [
    ["What do sea turtles mainly eat?", "Jellyfish", "Krill", "Seagrass and Algae", "Sea Anemone"],
    ["Where do sea turtles lay their eggs?", "Inside Coral Reefs", "On the Beach", "On the Sea Floor", "They Don't Lay Eggs"],
    ["How long can sea turtles hold their breath?", "About 5 Hours", "About 30 Min", "They Have Gills", "About 12 Hours"],
    ["What is the largest sea turtle species", "Loggerhead Sea Turtle", "Leatherback Sea Turtle", "Hawksbill Sea Turtle", "Green Sea Turtle"],
    ["What are sea turtles main predators?", "Sharks", "Fishing Boats", "Dogs", "All of The Above"]
];

var localScores = JSON.parse(localStorage.getItem("highScores"));
if(localScores !== null){
    showScores();
    numScores = localScores.length;
}
var numScores;
//event listener for view high scores
scoresButton.addEventListener("click", function() {
    //hides starting screen and shows scores screen
    startScreen.setAttribute("style", "display: none;");
    hiscoreScreen.setAttribute("style", "display: inline;");
    //hides view highscores button
    scoresButton.setAttribute("style", "display: none;"); 
});

//event listener for go back button on high scores
gobackButton.addEventListener("click", function() {
    //hides high score screen and shows starting screen
    hiscoreScreen.setAttribute("style", "display: none;");
    startScreen.setAttribute("style", "display: inline;");
    //shows view highscores button
    scoresButton.setAttribute("style", "display: inline;"); 
});


//event listener to start the game
startButton.addEventListener("click", function() {
    questionNumber = 0;
    //hides starting screen and then displays questions screen
    startScreen.setAttribute("style", "display: none;");
    questionsScreen.setAttribute("style", "display: inline;");
    //hides high score button
    scoresButton.setAttribute("style", "display: none;");
    timeLeft.setAttribute("style", "display: inline;");
    showQuestion(questionNumber);
    startTimer();
});

//shows the questions on the screen
function showQuestion(x) {
    theQuestion.innerHTML = allQuestions[x][0];
    answer1.innerHTML = allQuestions[x][1];
    answer2.innerHTML = allQuestions[x][2];
    answer3.innerHTML = allQuestions[x][3];
    answer4.innerHTML = allQuestions[x][4];
}

//button listeners for correct answer
answer1.addEventListener("click", function() {
    if(questionNumber == 2){
        confirmation.innerHTML = "Correct!"
        confirmation.setAttribute("style", "display: block;");
        correctAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
        }, 1000);
        showQuestion(questionNumber);
    }else{
        confirmation.innerHTML = "Wrong!"
        confirmation.setAttribute("style", "display: block;");
        wrongAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
        }, 1000);
        showQuestion(questionNumber);
    }
});
answer2.addEventListener("click", function() {
    if(questionNumber == 1 || questionNumber == 3){
        confirmation.innerHTML = "Correct!"
        confirmation.setAttribute("style", "display: block;");
        correctAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
        }, 1000);
        showQuestion(questionNumber);
    }else{
        confirmation.innerHTML = "Wrong!"
        confirmation.setAttribute("style", "display: block;");
        wrongAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
        }, 1000);
        showQuestion(questionNumber);
    }
});
answer3.addEventListener("click", function() {
    if(questionNumber == 0){
        confirmation.innerHTML = "Correct!"
        confirmation.setAttribute("style", "display: block;");
        correctAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
        }, 1000);
        showQuestion(questionNumber);
    }else{
        confirmation.innerHTML = "Wrong!"
        confirmation.setAttribute("style", "display: block;");
        wrongAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
        }, 1000);
        showQuestion(questionNumber);
    }
});
answer4.addEventListener("click", function() {
    if(questionNumber == 4){
        confirmation.innerHTML = "Correct!"
        confirmation.setAttribute("style", "display: block;");
        correctAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
            showQuestion(questionNumber);
        }, 1000);
        showQuestion(questionNumber);
    }else{
        confirmation.innerHTML = "Wrong!"
        confirmation.setAttribute("style", "display: block;");
        wrongAnswers++;
        questionNumber++;
        setTimeout(function() {
            confirmation.setAttribute("style", "display: none;");
            if(questionNumber == 5){
                endGame();
            }
            
        }, 1000);
        showQuestion(questionNumber);
    }
});

//starts the timer and ends the game if the timer gets to zero or if player answers all questions
function startTimer() {
    secondsLeft = 45;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeLeft.textContent = "Time left: " + secondsLeft;
        
        if(secondsLeft === 0) {
          finalScore = (correctAnswers * secondsLeft) - (wrongAnswers * secondsLeft);
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          timeLeft.textContent = "";
          timeLeft.setAttribute("style", "border: 0;");
          // Calls function to create and append image
          endGame();
        }else if(questionNumber == 5){
          finalScore = (correctAnswers * secondsLeft) - (wrongAnswers * secondsLeft);
          clearInterval(timerInterval);
          timeLeft.textContent = "";
          timeLeft.setAttribute("style", "border: 0;");
          endGame();
        }

    }, 1000);
};

//hides the questions screen and displays the ending screen
//also changes title based on if they answered all the questions or if the time ran out
function endGame() {
    
    questionsScreen.setAttribute("style", "display: none;");
    endingScreen.setAttribute("style", "display: inline;");
    

    if(secondsLeft == 0) {
        document.querySelector("#ending-title").textContent = "Times up!";
    }else if(finalScore < 0){
        document.querySelector("#ending-title").textContent = "Better luck next time!";
    }else{
        document.querySelector("#ending-title").textContent = "Good job!";
    }
    if(finalScore < 0){
        document.querySelector("#display-final-score").innerHTML = "Final score: 0";
        finalScore = 0;
    }else{
        document.querySelector("#display-final-score").innerHTML = "Final score: " + finalScore;
    }
};

//get initials from the submit box and enter them along with score into local storage
document.querySelector("#submit-button").addEventListener("click", function() {
    event.preventDefault();
    questionNumber = 0;
    
    correctAnswers = 0;
    wrongAnswers = 0;
    var initials = document.querySelector("#initials-input").value;
    var gameResult = {"player": initials, "score": finalScore} ;
    if(localScores == null){
        localScores = [{"player": initials, "score": finalScore}];
    }else{
        localScores.push(gameResult);
        localScores.sort(function(a, b) {
            return parseFloat(b.score) - parseFloat(a.score);
        });
    }
    localStorage.setItem("highScores", JSON.stringify(localScores));
    endingScreen.setAttribute("style", "display: none;");
    hiscoreScreen.setAttribute("style", "display: inline;");
    document.querySelector("#initials-input").value = "";
    finalScore = 0;
    showScores();
});

document.querySelector("#clear-score-btn").addEventListener("click", function() {
    for(var x = 0; x < numScores; x++){
        document.querySelector("#names").innerHTML = "";
        document.querySelector("#scores").innerHTML = "";
    }
    localStorage.removeItem("highScores");
    localScores = [];
})

function showScores(){
    numScores = localScores.length;
    document.querySelector("#names").innerHTML = "";
        document.querySelector("#scores").innerHTML = "";
for(var x = 0; x < numScores; x++){
    document.querySelector("#names").insertAdjacentHTML("beforeend", "<li>" + localScores[x].player + "</li>");
    document.querySelector("#scores").insertAdjacentHTML("beforeend", "<li>" + localScores[x].score + "</li>");
}
};