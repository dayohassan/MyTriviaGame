var number = 3;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


var questions = [{
    question: "Which of these is a Boeing model?",
    answerList: ["The Boeing737\"", "The Boeing419\"", "The Boeing609\"", "The Boeing440\""],
    answer: 0
},{
    question: "\"Which Boeing planes was recently taken off the air?",
    answerList: ["Boeing 737\"", "Boeing 737Max's\"", "Boeing 747\"", "Boeing 712\""],
    answer: 2
},{
    question: "\"Where is the headquarters of Boeing?",
    answerList: ["New Delhi\"", "Atlanta\"", "chicago\"", "New York\""],
    answer: 3
},{
   
}];

$("#start").on("click", function() {

    // This Hides the Start button
    $(this).hide();

    // This Displays the  initial time countdown
    $("#time").html("<h2>Time Remaining: 30 Seconds</h2>" + "<br>");

    // This is the Start timer countdown
    run();
   

});