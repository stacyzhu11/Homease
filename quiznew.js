var next = document.getElementById('next');
var questionNum = 0; 
var quizSet = document.querySelectorAll('.quiz_set');
var listings = [[true,false,true,true,true,"Denver"],[true,false,true,true,true,"Lakeville"],[true,false,true,true,false,"Miami"],[false,true,true,false,false,"Norfolk"],[true,true,false,true,true,"Texas"]]

next.addEventListener("click", function(){
    step()
})

function step(){
    questionNum += 1;
    for(var i=0; i < quizSet.length; i++){
        quizSet[i].className="quiz_set";
    }
    quizSet[questionNum].className="quiz_set active";
    if (questionNum == 7){
        next.style.display = "none";
    }
}

