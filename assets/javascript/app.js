
// always set when you are ready to run $(document).ready(function()
$(document).ready(function() {

  // setting the timer to countdown from 15 seconds using start, stop, count, and reset fuctions
  var index = 0;
  var countdownTimer = {
    time : 15,
    reset: function() {
      this.time = 15;
      $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
        countdownTimer.time--;
        console.log(countdownTimer.time);
//        $('.timer').html(countdownTimer.time);
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };

// Using variables to create the question

var correct = 0;
var wrong = 0;
var q1 = {
  question : 'Who is the all-time homerun leader in Major League Baseball?',
  possibleAnswers : ['A. Babe Ruth', 'B. Alex Rodriguez', 'C. Barry Bonds','D. Hank Aaron'],
  answerKey : [false, false, true, false],
  answer : 'C. Barry Bonds'
};

var q2 = {
  question: 'What college did Michael Jordan attend and play basketball at?',
  possibleAnswers: ['A. Kentucky', 'B. Duke', 'C. Kansas', 'D. North Carolina'],
  answerKey : [false, false, false, true],
  answer : 'D. North Carolina'
};

var q3 = {
  question : 'What team did hockey great Wayne Gretzky play for?',
  possibleAnswers : ['A. Edmonton Oilers', 'B. Toronto Maple Leafs', 'C. Boston Bruins', 'D. New York Rangers'],
  answerKey : [true, false, false, false],
  answer : 'A. Edmonton Oilers'
};

var q4 = {
  question : 'True or False: The Cy Young award is given to the best hitter in baseball?',
  possibleAnswers : ['A. True', 'B. False'],
  answerKey : [false, true],
  answer : 'B. False'
};

var q5 = {
  question : 'What NBA player had to retire suddenly in 1991 due to contracting HIV?',
  possibleAnswers : ['A. Dennis Rodman', 'B. Wilt Chamberlain', 'C. Charles Barkley', 'D. Magic Johnson'],
  answerKey : [false, false, false, true],
  answer : 'D. Magic Johnson'
};

var q6 = {
  question : 'What retired NFL running back is the all-time leader in rushing yards?',
  possibleAnswers : ['A. Jim Brown', 'B. Walter Payton', 'C. Barry Sanders','D. Emmitt Smith'],
  answerKey : [false, false, false, true],
  answer : 'D. Emmitt Smith'
};

var q7 = {
  question : 'In Major League Baseball, how many games are played in a regular season?',
  possibleAnswers : ['A. 160', 'B. 144', 'C. 162', 'D. 154'],
  answerKey : [false, false, true, false],
  answer : 'C. 162'
};

var q8 = {
  question : 'Who is credited as creating the game of basketball?',
  possibleAnswers : ['A. Earl Watson', 'B. James Naismith', 'C. Sigmung Freud', 'D. Thomas Edison'],
  answerKey : [false, true, false, false],
  answer : 'B. James Naismith'
};

var q9 = {
  question : 'Which team was part of The Original Six of the NHL?',
  possibleAnswers : ['A. Hartford Whalers',
         'B. Chicago Blackhawks ',
         'C. Washington Capitals',
         'D. Ottawa Senators'],
  answerKey : [false, true, false, false],
  answer : 'B. Chicago Blackhawks'
};

var q10 = {
  question : 'Which MLB team has won the most World Series Championships?',
  possibleAnswers : ['A. Boston Red Sox',
          'B. Los Angeles Dodgers',
          'C. St. Louis Cardinals',
          'D. New York Yankees'],
  answerKey : [false, false, false, true],
  answer : 'D. New York Yankees'
}

// Using an array and functions to draw each question one by one with corresponding multiple choice answers

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
  console.log(questionSelection);
  countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

// Start Button click event function at the beginning of the game

function setup() {
  index = 0;
  $('.question').append('<button id="startButton">Start</button>');
  $('#startButton').on('click', function() {
    $(this).hide();
    countdownTimer.start();
    loadQuestion(index);
  });
}   

// Run through of obtaining the answers to the questions function

function getAnswer() {

//  nextQuestion();
  $('.answerchoice').on('click', function() {
    console.log('alert', index);
    index++;
    console.log('click', index);
    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    loadQuestion();
  })
}

// If the user answers correctly, then alert correct

function answerCorrect() {
  correct++;
  alert("Correct!");
  console.log("correct");
}


// If the user answers incorrectly, then alert incorrect

function answerWrong() {
  wrong++;
  alert("Incorrect!");
  console.log("wrong");
}

// At the end of the game, this function shows the number correct and incorrect

function showScore() {
  $('.question').empty();
  $('.question').append("<h2><p>" + correct + " correct</p></h2>");
  $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
  countdownTimer.stop();
  $('.timer').empty();

}

// Setting up the onclick events for the answer choices

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
  var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
  answerChosen = 'B';
 } else if (this.id == 'buttonC') {
  answerChosen = 'C';
 } else if (this.id == 'buttonD') {
  answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].answerKey[0] == true)) {
  answerCorrect();
 } else if (answerChosen == 'A') {
  answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].answerKey[1] == true)) {
  answerCorrect();
 } else if (answerChosen == 'B') {
  answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].answerKey[2] == true)) {
  answerCorrect();
 } else if (answerChosen == 'C') {
  answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].answerKey[3] == true)) {
  answerCorrect();
 } else if (answerChosen == 'D') {
  answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
  loadQuestion(index);
 } else {
  $(".answerchoice").hide();
  showScore();
 }
});


//  $('#start').click(countdownTimer.start);
});