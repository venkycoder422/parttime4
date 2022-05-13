//SELECTING RANDOM NUMBER FROM 1 TO 6
var firstRandomNum;
var secondRandomNum;
var thirdRandomNum;
document.querySelector('#throwDice1').addEventListener('click',function(){
    event.preventDefault();
    firstRandomNum = Math.floor(Math.random()*6)+1;
    var firstDiceImage = 'dice' + firstRandomNum + '.svg';
    document.querySelectorAll('img')[0].setAttribute("src",firstDiceImage);
// //console.log(firstDiceImage);
    winners(firstRandomNum,secondRandomNum,thirdRandomNum);
});
//console.log(firstRandomNum);

document.querySelector('#throwDice2').addEventListener('click',function(){
    event.preventDefault();
    secondRandomNum = Math.floor(Math.random()*6)+1;
    var secondDiceImage = 'dice' + secondRandomNum + '.svg';
    document.querySelectorAll('img')[1].setAttribute("src",secondDiceImage);

    winners(firstRandomNum,secondRandomNum,thirdRandomNum);

});

document.querySelector('#throwDice3').addEventListener('click',function(){
    event.preventDefault();
    thirdRandomNum = Math.floor(Math.random()*6)+1;
    var thirdDiceImage = 'dice' + thirdRandomNum + '.svg';
    document.querySelectorAll('img')[2].setAttribute("src",thirdDiceImage);
    winners(firstRandomNum,secondRandomNum,thirdRandomNum);
});



///CHECKING WHO IS WINNER OUT OF THREE MEMBERS
function winners(firstRandomNum,secondRandomNum,thirdRandomNum){
    if(firstRandomNum>secondRandomNum && firstRandomNum>thirdRandomNum){
        document.querySelector('h1').innerText = "Winner is User1";
    
    }else if(secondRandomNum>firstRandomNum && secondRandomNum > thirdRandomNum){
        document.querySelector("h1").innerText = "Winner is User2"
    }
    else if(thirdRandomNum>firstRandomNum && thirdRandomNum>secondRandomNum){
        document.querySelector("h1").innerText = "Winner is User3"
     }else if(thirdRandomNum===firstRandomNum){
        document.querySelector("h1").innerText="User1 and User3 are Winners";
    }else if(firstRandomNum===secondRandomNum){
        document.querySelector("h1").innerText = "User1 and User2 are Winners";
    }
    else if(secondRandomNum===thirdRandomNum){
        document.querySelector("h1").innerText = "User2 and User3 are Winners";
    }
}
// winners();