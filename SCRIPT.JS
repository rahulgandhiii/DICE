const btnElement = document.getElementById('dice');
const diceElement = document.getElementById('diceimage');
const resultPara = document.getElementById('result');

function updateDice(){
    const die = Math.ceil(Math.random()*6);
    resultPara.innerText=`The die has drawn a ${die}.`;
    diceElement.src=`${die}.png`;
}