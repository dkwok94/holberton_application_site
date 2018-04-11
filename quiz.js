document.addEventListener("DOMContentLoaded", function(event) {

//Quiz Logic

   
function correctAnswers(array){
    for(i=0; i<array.length; i++){
	id = array[i].querySelector('[value="correct"]').id;
	correct.push(array[i].querySelector('label[for='+id+']').innerHTML);
	}
}
    
function userAnswers(array){
    for(i=0; i<array.length; i++){
	if(array[i].querySelector(':checked') != null){
	    answers.push(array[i].querySelector(':checked'));
	}
    }
}

function checkAnswers(userArray, correctArray){
    
    feedback = "<strong>See Below For Incorrect Answers:</strong><br/><br/>";
    for(i=0; i<userArray.length; i++){
	if(userArray[i].value == "correct"){
	    counter = counter + 1;
	    }
	
	else{
	    feedback = feedback + `Question ${i+1} - <strong>Correct Answer:</strong> ${correctArray[i]}<br/>`;
	    }
	}
    if(counter == correctArray.length){
	feedback = "<strong>All Answers Correct!</strong>";
    }
    document.querySelector('[id="results"]').innerHTML = feedback;
}

function finalScore(array){
    percentage = Math.round((counter/array.length)*100);
    text = '<br/>Click the "Play" buttons next to each word to hear how they are pronounced.<br/>'
    if(counter == array.length){
	document.querySelector('[id="score"]').innerHTML = text + "<br/><strong>100%, Congrats!</strong>";
	}
    
    else{
	document.querySelector('[id="score"]').innerHTML = text + `<br/><strong>${counter} questions correct out of ${array.length}. You got ${percentage}%</strong>`;
	}
}

function quiz(array, userArray, correctArray){
    correctAnswers(array);
    userAnswers(array);

    if(userArray.length == array.length){
	checkAnswers(userArray, correctArray);
	finalScore(array);
    }
    else{
	alert("Please fill out all answers before submitting!");
    }
}

function audiobuttons(){
    audios = document.querySelectorAll(".audio_file");
        for (i=0; i<audios.length; i++){
            audios[i].innerHTML = "Play";
        }
}

    var submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function(e){
	forms = document.querySelectorAll('.answers');
	correct = [];
	answers = [];
	counter = 0;
	quiz(forms, answers, correct);
	
	if(answers.length == forms.length){
	    audiobuttons();
	}
    })
})
