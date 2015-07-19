$(document).ready(function() {

var quizData = [
    {
        qNum: 1, 
        question: "Who is the author of the first 5 books of the Bible, known as the Pentateuch?",
        answer: ["Moses", "Jesus", "Nebuchadnezzar", "Solomon"],
        correctAnswer: 0,
        quickFact: "Moses, who grew up in the Eyptian house of the Pharoah would have been taught to read and write on a form of ancient paper called 'papyrus'."
	}, 
   {  
        qNum: 2,
        question: "What Ancient Near Eastern treaty format does the book of Deuteronomy correspond to?",
        answer: ["Pharoahic Treaty", "Babylonian vassal", "Suzerain vassal", "Davidic Covenant"], 
        correctAnswer: 2, 
        quickFact: "Archaelogists have found Hittite Suzerain-Vassal (King - Servant) treaties that follow the same format as Deuteronomy, thus helping solidify its authorship date around the 14th centery B.C."
    }, 
   {  
        qNum: 3,
        question: "Who was the successor of Moses?", 
        answer: ["Aaron", "Gideon", "Samson", "Joshua"],
        correctAnswer: 3, 
        quickFact: "Joshua succeeded Moses and was charged by God to lead the Israelites into the Promised Land." 
    }, 
   {
		qNum: 4, 
		question: "Which of the twelve tribes of Israel was Moses from?",
		answer: ["Ephraim", "Judah", "Levi", "Reuben"], 
        correctAnswer: 2, 
        quickFact: "Moses was a 'Levite' (descendant of the tribe of Levi). The Levites where the only  tribe in Israel that did not inherit any land; they became the only tribe responsible for priestly duties and thus God was their inheritance.",
    }, 
   {
		qNum: 5, 
		question: "What is the English/Greek version of the name 'Joshua'?",
		answer: ["Jesus", "Joshuatus", "Josham", "Josephus"], 
		correctAnswer: 0, 
        quickFact: "The name Joshua is the English rendering of the Hebrew name 'Yehoshua'. 'Jesus' is the English rendering of the Greek transliteration of 'Yehoshua'. Jesus spoke Aramaic and would have most likely been referred to as Yeshua ben Yosef (Jesus son of Joseph).",

	}]; //end of quizData array
	
	//global variables
	var i = 0;  //array index variable
	var score = 0; 


	$('body').on("click", '#nextBtn', function(){
		i++; 
		if(i === (quizData.length)){
			removeContent(); 
			$('div.question').remove(); 
			$('div.answer').remove(); 
			$('#submitContainer').remove(); 
			$('<div class="complete"><p class="complete">Congratulations! <br/> You have completed the quiz!</p></div>').appendTo('#content'); 
			$('<div class="score"><p class="score">You answered<br/><span>' + score + ' of 5</span><br/>questions correctly.</p></div>').appendTo('#content'); 
			$('<div class="restart"><a id="restartBtn">Restart</a></div>').appendTo("#content"); 
			$("#restartBtn").on("click", function(){ location.reload(); })

		} else {

			nextQuestion();
		} 		
	})



	$('#btnContainer').on("click", function(){
		var answer = quizData[i].correctAnswer;  
		
		if( $( "input:radio[name=answer1]:checked" ).length == 0 ) {
			alert("Please select an answer"); 
			return false; 
		}

		else if( $( "input:radio[name=answer1]:checked" ).val() == answer ){
			$('#overlay').fadeIn();		
			$('<div class="correct">Correct!</div>').appendTo('#explanation'); 
			$('<div class="factContainer"><p class="quickFact">' + quizData[i].quickFact + '</p></div>').appendTo('#explanation'); 
			$('<a id="nextBtn">Next</a> ').appendTo('#explanation'); 
			score++; 
		
		} else { 
			$('#overlay').fadeIn();	
			$('<div class="incorrect">Incorrect!</div>').appendTo('#explanation'); 
			$('<div class="factContainer"><p class="quickFact">' + quizData[i].quickFact + '</p></div>').appendTo('#explanation'); 
			$('<a id="nextBtn">Next</a> ').appendTo('#explanation'); 
		}
	})

	

function nextQuestion(){
	removeContent(); 
	addContent(); 
	update_qNum();
}

function removeContent(){
    $('#overlay').fadeOut("slow", function(){
		$('.correct').remove(); 
		$('.incorrect').remove();
		$('.factContainer').remove();
		$('#nextBtn').remove(); 
	}); 
    $('p.qNumber').remove(); 
	$('p.question').remove(); 
	$('form.answer').remove(); 
}

function addContent(){	
	$(' <form class="answer"> <input type="radio" name="answer1" value="0">' + quizData[i].answer[0] + '<br><input type="radio" name="answer1" value="1">' + quizData[i].answer[1] + '<br><input type="radio" name="answer1" value="2">' + quizData[i].answer[2] + '<br> <input type="radio" name="answer1" value="3">' + quizData[i].answer[3] +';</form>').prependTo('div.answer'); 
	$('<p class="question">' + quizData[i].question + '</p>').prependTo('div.question'); 
}

function update_qNum(){
	$('<p class="qNumber"> Question ' + quizData[i].qNum + ' of 5</p>').prependTo('div.question'); 
}



}); //end of document