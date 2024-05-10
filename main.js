 const player = function (name1,name2){
let firstPlayer = name1;
let secondPlayer = name2;
return {firstPlayer,secondPlayer};

}

 const gameBoard = function(){

let players = player('john','jacob');

console.log(players);
console.log(players.firstPlayer);
}
 let game = gameBoard();