$(document).ready(function() {
    // creat an object with each of the questions, the answers and the correct answer
    var time = 3;
    var questions = {
        question: ["what color is water?",
            "Which State is North of CA?",
            "What ocean is West of CA?"
        ],
        correctAnswer: ["Blue", "Oregon", "Pacific"],
        allAnswers: [
            ["Green", "Red", "Blue", "Purple"],
            ["Oregon", "Florida", "Kansas", "Nevada"],
            ["Indian", "Atlantic", "Pacfic", "Arctic"]
        ]
    }
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    // at gamestart create a setTimeout() to countdown time remaining
    // at gamestart - question 1 and the four answers are loaded
    // create an on click function for each of the answers
    function gameStart() {
        questionCounter = setInterval(remainingTime, 1000);
        $(".question").html(questions.question[0]);
        $(".start").hide();
        $(".answer1").show().html(questions.allAnswers[0][0]).on(
            "click", function() {
                checkAnswer(questions.allAnswers[0][0])
            });
        $(".answer2").show().html(questions.allAnswers[0][1]).on(
            "click", function() {
                checkAnswer(questions.allAnswers[0][1])
            });
        $(".answer3").show().html(questions.allAnswers[0][2]).on(
            "click", function() {
                checkAnswer(questions.allAnswers[0][2])
            });
        $(".answer4").show().html(questions.allAnswers[0][3]).on(
            "click", function() {
                checkAnswer(questions.allAnswers[0][3])
            });
    }

    function remainingTime() {
            time--;
            $(".time-remaining").html("Time Remaining: " + time +
                " Seconds");
            // if no answer
            if (time === 0) {
                unansweredScreen();
            }
        }
        // compare the selection against the correct answer.

    function checkAnswer(userSelection) {
            console.log("Checking Answer");
            if (userSelection === questions.correctAnswer[0] || userSelection === questions.correctAnswer[1] || userSelection === questions.correctAnswer[2]) {
                console.log("right answer");
                correctAnswerScreen();
            } else if (userSelection !== questions.correctAnswer[0] || userSelection !== questions.correctAnswer[1] || userSelection !== questions.correctAnswer[2]) {
                console.log("wrong answer");
                incorrectAnswerScreen();
            }
        }
        // if correct answer is picked - display win for 5 seconds and add 1 to win

    function correctAnswerScreen() {
            console.log("correct answer screen");
            setTimeout(gameStart, 5000);
            clearInterval(questionCounter);
            correctAnswers++;
            $(".time-remaining").html("Time Remaining: " + time +
                " Seconds");
            $(".question").html("Correct!");
            $(".answers").html(
                '<img src="../TriviaGame/assets/images/blue-water.jpg" alt="Blue Water"/>'
            );
        }
        // if incorrect answer is picked - display lose for 5 seconds and add 1 to lose

    function incorrectAnswerScreen() {
            console.log("incorrect answer screen");
            clearInterval(questionCounter);
            incorrectAnswers++;
            $(".time-remaining").html("Time Remaining: " + time +
                " Seconds");
            $(".question").html("Nope!");
            $(".correct-answer").html("The Correct Answer was: " +
                questions.correctAnswer[0]);
            $(".answers").html(
                '<img src="../TriviaGame/assets/images/blue-water.jpg" alt="Blue Water"/>'
            );
        }
        // if no answer is picked by timeout then display no answer for 5 seconds and add 1 to unanswered

    function unansweredScreen() {
            console.log("unansweredScreen");
            clearInterval(questionCounter);
            unanswered++;
            $(".time-remaining").html("Time Remaining: 0 Seconds");
            $(".question").html("Out of Time!");
            $(".correct-answer").html("The Correct Answer was: " +
                questions.correctAnswer[0]);
            $(".answers").html(
                '<img src="../TriviaGame/assets/images/blue-water.jpg" alt="Blue Water"/>'
            );
        }
        //  then run a nextquestion function that moves to next question in the array

    function nextQuestion() {
            console.log("next Question");
        }
        // Once array of questions ends, then display wins, losses, unanswered and a button with onclick function to reset game
        // create a reset function to clear the scores and run the gamestart function
        // onload - create the start button to run the gamestart function

    function firstPage() {
        $(".start").html("Start the game!");
        $(".answer1, .answer2, .answer3, .answer4").hide();
        $(".start").on("click", gameStart);
    }
    firstPage();
});