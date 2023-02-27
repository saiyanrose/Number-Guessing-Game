'use strict';
//access html element
//style them
//manipulate them
//document is entry point to the dom.
let secretNumber=Math.trunc(Math.random()*10)+1;
let score=10;
let highScore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent='No Number!';
    }else if(guess===secretNumber){
        const number=document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.message').textContent='Correct Number! You win.';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        } 
        document.querySelector('body').style.backgroundColor='green';
    }else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='too high!';
            score=score-1;
            document.querySelector('.score').textContent=score;            
        }else{
            document.querySelector('.message').textContent='Game over! try again later.';
            document.querySelector('.score').textContent=0; 
            document.querySelector('body').style.backgroundColor='red';
        }        
    }else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='too low!';
            score=score-1;
            document.querySelector('.score').textContent=score;            
        }else{
            document.querySelector('.message').textContent='Game over! try again later.';
            document.querySelector('.score').textContent=0; 
            document.querySelector('body').style.backgroundColor='red';
        }    
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=10;
    document.querySelector('.score').textContent=score; 
    document.querySelector('.message').textContent='Start guessing...'; 
    document.querySelector('.guess').value=''; 
    document.querySelector('body').style.backgroundColor='#222';  
    secretNumber=Math.trunc(Math.random()*10)+1;
    document.querySelector('.number').textContent='?';
});
