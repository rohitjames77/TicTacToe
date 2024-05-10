function playerCreation(){
          let firstPlayerName  = prompt("Hello Player-One What's your name");   
    console.log(`firstPlayerName ${  firstPlayerName}`);
let secondPlayerName = prompt("Hello Player-Second What's your name");
console.log(`secondPlayerName  ${ secondPlayerName}`);


function playerProfile (){    
    let firstPlayer = {
        name: firstPlayerName,
        sign : 'X',
    }
    let secondPlayer = {
        name:secondPlayerName,
        sign :'O',
    }

    let players = {firstPlayer,secondPlayer};
    console.log(players);
}
 return playerProfile(); 
}
