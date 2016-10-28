$(document).ready(function() {
    // creat an object with each of the questions, the answers and the correct answer
    var questions = [{
        question: "When was the first Summer Olympics held in Los Angeles?",
        correctAnswer: "1932",
        allAnswers: ["1952", "1932", "1972", "1896"],
        image: "assets/images/olympics.gif"
    }, {
        question: "What the first professional football team based in Los Angeles?",
        correctAnswer: "Los Angeles Bulldogs",
        allAnswers: ["Los Angeles Raiders",
            "Los Angeles Bulldogs",
            " Los Angeles Buccaneers", "Los Angeles Rams"
        ],
        image: "assets/images/bulldogs.gif"
    }, {
        question: "What is Los Angeles City Population?",
        correctAnswer: "4 Million",
        allAnswers: ["4 Million", "0.5 Million", "8.5 Million",
            "2 Million"
        ],
        image: "assets/images/population.gif"
    }, {
        question: "What is original name for Los Angeles?",
        correctAnswer: "El Pueblo de Nuestra Senora la Reina de los Ángeles de Porciuncula",
        allAnswers: ["Los Ángeles",
            "El Pueblo de Nuestra Senora la Reina de los Ángeles de Porciuncula",
            "El Pueblo de la Reyna de los Ángeles",
            "La Reina de Los Angeles"
        ],
        image: "assets/images/old-la.gif"
    }];
    var time = 15;
    var followingQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    var questionCounter;
    // at gamestart create a setTimeout() to countdown time remaining
    // at gamestart - question 1 and the four answers are loaded
    // create an on click function for each of the answers
    function gameStart() {
        reset();
        clearInterval(questionCounter);
        questionCounter = setInterval(remainingTime, 1000);
        $(".time-remaining").html("Time Remaining: " + time +
            " Seconds");
        $(
            ".correct-answer, .answers-image, .correct-answers, .incorrect-answers, .unanswered"
        ).html("");
        $(".question").html(questions[followingQuestion].question);
        $(".start").hide();
        $(".answer1").show().html(questions[followingQuestion].allAnswers[
            0]).on("click", function() {
            clearInterval(questionCounter);
            checkAnswer(questions[followingQuestion].allAnswers[
                0]);
        });
        $(".answer2").show().html(questions[followingQuestion].allAnswers[
            1]).on("click", function() {
            clearInterval(questionCounter);
            checkAnswer(questions[followingQuestion].allAnswers[
                1]);
        });
        $(".answer3").show().html(questions[followingQuestion].allAnswers[
            2]).on("click", function() {
            clearInterval(questionCounter);
            checkAnswer(questions[followingQuestion].allAnswers[
                2]);
        });
        $(".answer4").show().html(questions[followingQuestion].allAnswers[
            3]).on("click", function() {
            clearInterval(questionCounter);
            checkAnswer(questions[followingQuestion].allAnswers[
                3]);
        });
    }

    function remainingTime() {
            $(".time-remaining").html("Time Remaining: " + time +
                " Seconds");
            time--;
            // if no answer
            if (time === -1) {
                clearInterval(questionCounter);
                unansweredScreen();
            }
        }
        // compare the selection against the correct answer.

    function checkAnswer(userSelection) {
            clearInterval(questionCounter);
            if (userSelection === questions[followingQuestion].correctAnswer) {
                correctAnswerScreen();
            } else if (userSelection !== questions[followingQuestion].correctAnswer) {
                incorrectAnswerScreen();
            }
        }
        // if correct answer is picked - display win for and add 1 to win

    function correctAnswerScreen() {
            setTimeout(nextQuestion, 3000);
            clearInterval(questionCounter);
            reset();
            correctAnswers++;
            $(".time-remaining").html("Time Remaining: " + time +
                " Seconds");
            $(".question").html("Correct!");
            $(".answer1, .answer2, .answer3, .answer4").hide();
            $(".correct-answer").show().html("You got it! " + questions[
                followingQuestion].correctAnswer) + " is right.";
            $(".answers-image").html("<img src=" + questions[
                followingQuestion].image + ">");
        }
        // if incorrect answer is picked - display lose and add 1 to lose

    function incorrectAnswerScreen() {
            setTimeout(nextQuestion, 3000);
            clearInterval(questionCounter);
            reset();
            incorrectAnswers++;
            $(".time-remaining").html("Time Remaining: " + time +
                " Seconds");
            $(".question").html("Nope!");
            $(".answer1, .answer2, .answer3, .answer4").hide();
            $(".correct-answer").show().html("The Correct Answer was: " +
                questions[followingQuestion].correctAnswer);
            $(".answers-image").show().html("<img src=" + questions[
                followingQuestion].image + ">");
        }
        // if no answer is picked by timeout then display no answer and add 1 to unanswered

    function unansweredScreen() {
            setTimeout(nextQuestion, 3000);
            clearInterval(questionCounter);
            reset();
            unanswered++;
            $(".time-remaining").html("Time Remaining: 0 Seconds");
            $(".question").html("Out of Time!");
            $(".answer1, .answer2, .answer3, .answer4").hide();
            $(".correct-answer").show().html("The Correct Answer was: " +
                questions[followingQuestion].correctAnswer);
            $(".answers-image").show().html("<img src=" + questions[
                followingQuestion].image + ">");
        }
        //  then run a nextquestion function that moves to next question in the array
        // Once array of questions ends, then display wins, losses, unanswered and a button with onclick function to reset game

    function nextQuestion() {
        clearInterval(questionCounter);
        if (followingQuestion === questions.length - 1) {
            lastPage();
        } else {
            followingQuestion++;
            gameStart();
        }
    }

    function lastPage() {
        clearInterval(questionCounter);
        followingQuestion = 0;
        $(".time-remaining").html("Time Remaining: " + time +
            " Seconds");
        $(".question").html("All done, here\'s how you did!");
        $(".correct-answer").hide();
        $(".start").hide();
        $(".answers-image").hide();
        $(".correct-answers").html("Correct Answers: " +
            correctAnswers);
        $(".incorrect-answers").html("Incorrect Answers: " +
            incorrectAnswers);
        $(".unanswered").html("Unanswered: " + unanswered);
        $(".answer4").hide();
        $(".start-over").show().html("Start Over?").on("click",
            function() {
                correctAnswers = 0;
                incorrectAnswers = 0;
                unanswered = 0;
                gameStart();
            });
    }

    function reset() {
            clearInterval(questionCounter);
            time = 15;
            $(".start-over").hide();
        }
        // onload - create the start button to run the gamestart function

    function firstPage() {
        $(".start").html("Start the game!");
        $(".answer1, .answer2, .answer3, .answer4, .start-over").hide();
        $(".start").on("click", gameStart);
    }
    firstPage();
});