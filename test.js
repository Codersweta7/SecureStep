const question =[{
    'que':'hi',
    'a':'hello',
    'b':'hola',
    'c':'hey',
    'd':'oye',
    'e':'aey',
    'correct':'b'},


   {'que':'hi',
    'a':'hello',
    'b':'hola',
    'c':'hey',
    'd':'oye',
    'e':'aey',
    'correct':'b'},

    {'que':'hi',
    'a':'hello',
    'b':'hola',
    'c':'hey',
    'd':'oye',
    'e':'aey',
    'correct':'b'}



]
let index=0;
const queBox=document.getElementById('queBox')
const loadQuestion=()=>{
    const data =question[index];
    queBox.innerText=data.que;
}

loadQuestion();



function renderQuestion(){
 const queBox=document.getElementById('question-container');
 const result=document.getElementById('result');
 result.innerHTML='';
//  render question
const question=question[currentQuestionIndex];
question.innerHTML=
}



function moveToNext(){
    if(currentQuestionIndex<question.length-1){
        currentQuestionIndex++;
        renderQuestion();
    }
}


function moveToPrevious(){
    if(currentQuestionIndex>0){
        currentQuestionIndex--;
        renderQuestion()
    }
}



// badges in the form of level1.jpg will be given to player
const badges = {
       
}
let badgeGiven= false;
function checkAnswer(answer){
    if(answer===correct){
    if(!badgeGiven){
        const badge=document.createElement('span');
    badge.classList.add('badge');
    badge.innerText = 'correct!';
    document.getElementById('result').appendChild(badge);
    badgeGiven=true;
}
else{
    alert('Incorrect! Try again...')
}
}}
renderQuestion();