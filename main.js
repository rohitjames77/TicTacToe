
function gameController (){
  let firstPlayerName;
  let   secondPlayerName;
  let firstPlayerSign = 'X';
  let secondPlayerSign = 'O';
  let board= gameBoard();
  function playerInfoCreator(){   // Prompts user to enter name's of the Two player........................... 
   firstPlayerName  = prompt("Hello First-Player What's your name");   
console.log(`firstPlayerName ${  firstPlayerName}`)   ;
    secondPlayerName = prompt("Hello Second-Player What's your name");
console.log(`secondPlayerName  ${ secondPlayerName}`);
   //Returns Players Object containing both players name and play signs ...............................
   
}
playerInfoCreator();

console.log(firstPlayerName);
console.log(secondPlayerName);

function gameBoard(){        // Creates empty Game-Board........................
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

return board;
}
function firstPlayerResult(){ 
  let row1=  board[0];
  let row2 = board[1];
  let row3  = board[2];
  let rowTest = (str)=> { return str === 'X'}
  if (row1.length ===3 &&row1.every(rowTest)=== true){  
  return true;
  } else if (row2.length ===3 &&row2.every(rowTest)=== true){
      return true;
  }else if (row3.length ===3 &&row3.every(rowTest)=== true){
      return true;
  }else if (row1[0]&& row2[1]&&row3[2]==='X'){
      return true;
  }else if (row1[2] && row2[1]&& row3[0] ==='X'){
      return true;
  } else if (row1[0]&& row2[0]&& row3[0]==='X'){
      return true;
  } else if (row1[1]&& row2[1]&& row3[1]==='X'){
      return true;
  }else if (row1[2]&& row2[2]&& row3[2]==='X'){
      return true;
  }
   }

   let secondPlayerResult =function(){ 
    let row1=  board[0];
    let row2 = board[1];
    let row3  = board[2];
    let rowTest = (str)=> { return str === 'O'}
    if (row1.length ===3 &&row1.every(rowTest)=== true){  
    return true;
    } else if (row2.length ===3 &&row2.every(rowTest)=== true){
        return true;
    }else if (row3.length ===3 &&row3.every(rowTest)=== true){
        return true;
    }else if (row1[0]&& row2[1]&&row3[2]==='O'){
        return true;
    }else if (row1[2] && row2[1]&& row3[0] ==='O'){
        return true;
    } else if (row1[0]&& row2[0]&& row3[0]==='O'){
        return true;
    } else if (row1[1]&& row2[1]&& row3[1]==='O'){
        return true;
    }else if (row1[2]&& row2[2]&& row3[2]==='O'){
        return true;
    }
     }



let counter = 0;
for (let i =0; i < 9 ;i++){
counter++;
if (counter % 2 ===0){
  secondPlayerRound();
  if (secondPlayerResult() === true){
    console.log(board);
    console.log(`${secondPlayerName} You Won The Round`);
    break;
  }
  console.log(board);
} else if (counter % 2 ===1){
  firstPlayerRound();
  if (firstPlayerResult() === true){
    console.log(board);
    console.log(`${firstPlayerName} You Won The Round`);
    break;
  }
  console.log(board);
}
}

  function firstPlayerRound(){
  let cellNo;
    let row1 =board[0];
    let row2 =board[1];
    let row3=board[2]; 
    let roundCount=1;
    for (let i=0;i<roundCount;i++){
    let userChoice =prompt(`${firstPlayerName} Please Select Your Cell No 1 to 9...........`);
    console.log( `userChoice ${userChoice}`);
    switch(userChoice){
      case  '1':
          cellNo = 0;
         row1.splice(cellNo,1,firstPlayerSign);
        break;
        case '2':
          cellNo = 1;
          row1.splice(cellNo,1,firstPlayerSign);
          
          break;
          case '3':
             cellNo = 2;
             row1.splice(cellNo,1,firstPlayerSign);
             
              break;
            case '4':
              cellNo = 0;
              row2.splice(cellNo,1,firstPlayerSign);
              
              break;
              case '5':
                cellNo = 1;
                row2.splice(cellNo,1,firstPlayerSign);
                
                break;
                case '6':
                  cellNo = 2;
                  row2.splice(cellNo,1,firstPlayerSign);
                  
                  break;
                  case '7':
                    cellNo = 0;
                    row3.splice(cellNo,1,firstPlayerSign);
                    
                    break;
                    case '8':
                      cellNo = 1;
                      row3.splice(cellNo,1,firstPlayerSign);
                      
                      break;
                      case '9':
                        cellNo = 2;
                        row3.splice(cellNo,1,firstPlayerSign);
                        
                        break; 
                      };
                                     
                    }
}

function secondPlayerRound(){
 
 
  let cellNo;
     let row1 =board[0];
     let row2 =board[1];
     let row3=board[2];
     let userChoice =prompt(`${secondPlayerName} Please Select Your Cell No 1 to 9...........`);
     console.log( `userChoice ${userChoice}`);
     switch(userChoice){
       case  '1':
           cellNo = 0;
          row1.splice(cellNo,1,secondPlayerSign);
          
         break;
         case '2':
           cellNo = 1;
           row1.splice(cellNo,1,secondPlayerSign);
           
           break;
           case '3':
              cellNo = 2;
              row1.splice(cellNo,1,secondPlayerSign);
              
               break;
             case '4':
               cellNo = 0;
               row2.splice(cellNo,1,secondPlayerSign);
               
               break;
               case '5':
                 cellNo = 1;
                 row2.splice(cellNo,1,secondPlayerSign);
                 
                 break;
                 case '6':
                   cellNo = 2;
                   row2.splice(cellNo,1,secondPlayerSign);
                   
                   break;
                   case '7':
                     cellNo = 0;
                     row3.splice(cellNo,1,secondPlayerSign);
                     
                     break;
                     case '8':
                       cellNo = 1;
                       row3.splice(cellNo,1,secondPlayerSign);
                       
                       break;
                       case '9':
                         cellNo = 2;
                         row3.splice(cellNo,1,secondPlayerSign);
                         
                         break; 
                       };
                                      
                     } 




}
gameController();



 
