console.log ("play scissors paper stone");


//List all elements that will change as user play the game

//score:
var userScore = 0;
var comScore = 0;

//browser display/update scores
var userScoreHTML = document.querySelector("#user-score");
var comScoreHTML = document.querySelector("#com-score");
var scoreBoardHTML = document.querySelector(".score-board");
var resultHTML = document.querySelector(".result");

//scissors paper stone button
var scissorsButton = document.querySelector("#scissors");
var paperButton = document.querySelector("#paper");
var stoneButton = document.querySelector("#stone");

//user click a button first
//com choose at random
//compare choices
//list of wins/lose/draws
//display result
//update the score board

//user click a button
var clickOnScissors = function (event) {
    console.log("you clicked scissors")
    //after user click on scissors --> buttons disappear
    hideButton();
    //after user click on scissors --> com choose randomly --> compare
    console.log ("computer chose " + comChooseRandom());
    var comHasChosen = comChooseRandom();
    console.log("lets compare Computer " + comHasChosen);
    //User choose scissor, the possible scenarios:
    var userHasChosen = "scissors";
    switch (userHasChosen + comHasChosen) {
        case "scissorspaper":
        console.log("YOU WIN!");
        setTimeout(()=>{win(userHasChosen,comHasChosen)},1000);
        break;
        case "scissorsstone":
        console.log("YOU LOSE!");
        setTimeout(()=>{lose(userHasChosen,comHasChosen)},1000);
        break;
        case "scissorsscissors":
        console.log("Its a draw");
        setTimeout(()=>{draw(userHasChosen,comHasChosen)},1000);
        break;
    //Bring back the buttons
    bringBackMyButton()
    };

};
scissorsButton.addEventListener("click",clickOnScissors);

var clickOnPaper = function (event) {
    console.log("you clicked paper")
    //after user click on paper --> com choose randomly --> compare
    console.log ("computer chose " + comChooseRandom());
    var comHasChosen = comChooseRandom();
    console.log("lets compare Computer " + comHasChosen);
    //User choose paper, the possible scenarios:
    var userHasChosen = "paper";
    switch (userHasChosen + comHasChosen) {
        case "paperstone":
        console.log("YOU WIN!");
        setTimeout(()=>{win(userHasChosen,comHasChosen)},1000);;
        break;
        case "paperscissors":
        console.log("YOU LOSE!");
        setTimeout(()=>{lose(userHasChosen,comHasChosen)},1000);
        break;
        case "paperpaper":
        console.log("Its a draw");
        setTimeout(()=>{draw(userHasChosen,comHasChosen)},1000);
        break;
    };
};
paperButton.addEventListener("click",clickOnPaper);


var clickOnStone = function (event) {
    console.log("you clicked stone")
    //after user click on rock --> com choose randomly --> compare
    console.log ("computer chose " + comChooseRandom());
    var comHasChosen = comChooseRandom();
    console.log("lets compare Computer " + comHasChosen);
    //User choose paper, the possible scenarios:
    var userHasChosen = "stone";
    switch (userHasChosen + comHasChosen) {
        case "stonescissors":
        console.log("YOU WIN!");
        setTimeout(()=>{win(userHasChosen,comHasChosen)},1000);;
        break;
        case "stonepaper":
        console.log("YOU LOSE!");
        setTimeout(()=>{lose(userHasChosen,comHasChosen)},1000);
        break;
        case "stonestone":
        console.log("Its a draw");
        setTimeout(()=>{draw(userHasChosen,comHasChosen)},1000);
        break;
    };
};
stoneButton.addEventListener("click", clickOnStone);

//com choose randomly
function comChooseRandom(){
    var comChoices = ["scissors","paper","stone"];
    var x = Math.floor(Math.random()*3)
    return comChoices[x];
}
console.log ("computer chose " + comChooseRandom());

//to hide button after user click on button
function hideButton()
{
    document.getElementById('to-hide').style.display = "none";
}

//bring back the buttons
function bringBackMyButton(){
    document.getElementById('to-hide').style.display = "inline-block";
}




// user win --> update score --> change result msg on browser
function win(user,com){
    console.log("You Win!!!👍")
    userScore++;
    userScoreHTML.innerHTML = userScore;
    comScoreHTML.innerHTML = comScore;
    resultHTML.innerHTML = ("You win!! Computer chose "+ com +".")
};

// user lose --> update score --> change result msg on browser
function lose(user,com){
    console.log("You Lose!!!👎")
    comScore++;
    userScoreHTML.innerHTML = userScore;
    comScoreHTML.innerHTML = comScore;
    resultHTML.innerHTML = ("You lose!!! Computer chose "+ com +".")
};

// draw scenario --> change result msg on browser
function draw(user,com){
    console.log("its a draw!!!👌")
    userScoreHTML.innerHTML = userScore;
    comScoreHTML.innerHTML = comScore;
    resultHTML.innerHTML = ("Its a draw!!! Computer chose "+ com +".")
}