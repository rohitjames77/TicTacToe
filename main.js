function playerCreation(){   // Prompts user to enter name's of the Two player...........................
          let firstPlayerName  = prompt("Hello Player-One What's your name");   
    console.log(`firstPlayerName ${  firstPlayerName}`);
let secondPlayerName = prompt("Hello Player-Second What's your name");
console.log(`secondPlayerName  ${ secondPlayerName}`);


function playerProfile (){    //Returns Players Object containing both players name and play signs ...............................
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
    return players;
}
 return playerProfile(); 
}
playerCreation();

function gameBoard (){        // Creates empty Game-Board........................
    let rows = 3;
   let columns = 3;
    let board =[];
    let cell =' ';
    for (let i =0;i<rows;i++){
      board[i]=[];
for (let j=0;j<columns;j++){
    board[i].push(cell);
}
}

function gameRound (){
    let cellNo ;
    let row1 =board[0];
    let row2 =board[1];
    let row3=board[2]; 
    let roundCount=9;
    for (let i=0;i<roundCount;i++){
    let userChoice =prompt('Please Select Your Cell No 1 to 9...........');
    console.log( `userChoice ${userChoice}`);
    switch(userChoice){
      case  '1':
          cellNo = 0;
         row1.splice(cellNo,1,'X');
         console.log(board);
        break;
        case '2':
          cellNo = 1;
          row1.splice(cellNo,1,'X');
          console.log(board);
          break;
          case '3':
             cellNo = 2;
             row1.splice(cellNo,1,'X');
             console.log(board);
              break;
            case '4':
              cellNo = 0;
              row2.splice(cellNo,1,'X');
              console.log(board);
              break;
              case '5':
                cellNo = 1;
                row2.splice(cellNo,1,'X');
                console.log(board);
                break;
                case '6':
                  cellNo = 2;
                  row2.splice(cellNo,1,'X');
                  console.log(board);
                  break;
                  case '7':
                    cellNo = 0;
                    row3.splice(cellNo,1,'X');
                    console.log(board);
                    break;
                    case '8':
                      cellNo = 1;
                      row3.splice(cellNo,1,'X');
                      console.log(board);
                      break;
                      case '9':
                        cellNo = 2;
                        row3.splice(cellNo,1,'X');
                        console.log(board);
                        break; 
                      };
                                     
                    }
}
gameRound()
}
gameBoard();


