

function gameController (){
    let firstPlayerName;
    let   secondPlayerName;
    let firstPlayerSign = 'X';
    let secondPlayerSign = 'O';
    let board= gameBoard();
    let player1= document.getElementById('player1name');
    let player2=document.getElementById('player2name');
    let modal = document.getElementById('modal');                              //    Returns Players Object containing both players name and play signs ...............................
    document.getElementById('submit').addEventListener('click',playerInfoCreator);
    
    function playerInfoCreator(){   // Prompts user to enter name's of the Two player........................... 
      firstPlayerName  = document.getElementById('first-player-name').value;   
  console.log(`firstPlayerName ${  firstPlayerName}`)   ;
      secondPlayerName = document.getElementById('second-player-name').value;
  console.log(`secondPlayerName  ${ secondPlayerName}`);
     //Returns Players Object containing both players name and play signs ...............................
     if (firstPlayerName && secondPlayerName !== ''){ 
     modal.style.display='none';
       document.getElementById('round-result').textContent =`${firstPlayerName}'s turn`
       player1.textContent =firstPlayerName;
       player2.textContent =secondPlayerName;
  }
}
  
  function gameBoard(){        // Creates empty Game-Board........................
    let rows = 3;
   let columns = 3;
    let board =[];
    let cell =' ';
    for (let i =0;i<rows;i++){
      board[i]=[];
  for (let j=0;j<columns;j++){
    board[i].push(cell);
    console.log(board[0].length);
  }
  }
  console.log(board);
  return board;
  }
  function firstPlayerResult(){ 
    let row1=  board[0];
    let row2 = board[1];
    let row3  = board[2];
    let testStr = 'X';
    let result = false ;
    let rowTest = (str)=> { return str === 'X'}
    if (row1.length ===3 && row1.every(rowTest)=== true){  
    result = true;
      return result;
    } else if (row2.length === 3 && row2.every(rowTest)=== true){
        result = true;
      return result;
    }else if (row3.length === 3 && row3.every(rowTest)=== true){
        result = true;
      return result;
    }else if (row1[0]=== testStr && row2[1]=== testStr &&row3[2]===testStr){ 
        result = true;
      return result;
    }else if (row1[2]=== testStr && row2[1]=== testStr &&row3[0]===testStr){
        result = true;
      return result;
    } else if (row1[0]=== testStr && row2[0]=== testStr &&row3[0]===testStr){
        result = true;
      return result;
    } else if (row1[1]=== testStr && row2[1]=== testStr &&row3[1]===testStr){
        result = true;
      return result;
    }else if (row1[2]=== testStr && row2[2]=== testStr &&row3[2]===testStr){
        result = true;
      return result;
    }
     }
          let secondPlayerResult =function(){ 
      let row1=  board[0];
      let row2 = board[1];
      let row3  = board[2];
      let joinedRows= row1.concat(row2,row3);
      console.log(joinedRows.length);
      let testStr ='O';
      let result =false;
      let rowTest = (str)=> { return str === 'O'}
      if (row1.length ===3 && row1.every(rowTest)=== true){  
        result=true;
        return result
      } else if (row2.length ===3 &&row2.every(rowTest)=== true){ //conditions for rows.............
        result=true;  
        return result;
      }else if (row3.length ===3 &&row3.every(rowTest)=== true){ //conditions for rows...............
        result=true;  
        return result ;
      }else if (row1[0]=== testStr && row2[1]=== testStr &&row3[2]===testStr){
        result=true;
        return result;
    }else if (row1[2]=== testStr && row2[1]=== testStr &&row3[0]===testStr){
      result=true;  
      return result ;
    } else if (row1[0]=== testStr && row2[0]=== testStr &&row3[0]===testStr){
      result=true;  
      return result ;
    } else if (row1[1]=== testStr && row2[1]=== testStr &&row3[1]===testStr){
      result=true;  
      return result ;
    }else if (row1[2]=== testStr && row2[2]=== testStr &&row3[2]===testStr){
      result=true;  
      return result ;
    }
  
    }
     
     let counter = 0;
     let resultDiv= document.getElementById('round-result');
     let gameContainer = document.getElementById('game-container');
     gameContainer.addEventListener('click',test);
  gameContainer.addEventListener('click',roundChange)
  function roundChange(event){
      counter++;
      
    if (counter % 2 ===0){
      resultDiv.textContent =`${firstPlayerName}'s turn`
      event.target.textContent= secondPlayerSign;
      secondPlayerRound();
      if (secondPlayerResult() === true){
        resultDiv.textContent =`${secondPlayerName} won the round `
        console.log(board);
        console.log(`${secondPlayerName} You Won The Round`);
        setTimeout(function (){ modal.style.display ='block';
        resultDiv.textContent ='';
        player1.textContent ='';
        player2.textContent ='';
        location.reload();
        }, 1500);
      }else if (secondPlayerResult()=== false){
        setTimeout(function (){ modal.style.display ='block';
      resultDiv.textContent ='';
      player1.textContent ='';
      player2.textContent ='';
      location.reload();
      }, 1500);};
    } else if (counter % 2 ===1){
      resultDiv.textContent =`${secondPlayerName}'s turn`
      event.target.textContent= firstPlayerSign;
      firstPlayerRound();
      if (firstPlayerResult() === true){
        resultDiv.textContent =`${firstPlayerName} won the round  `
        console.log(board);
        console.log(`${firstPlayerName} You Won The Round`);
        setTimeout(function (){ modal.style.display ='block';
        resultDiv.textContent ='';
        player1.textContent ='';
        player2.textContent ='';
        location.reload();
        }, 1500);
        console.log(board);
      }else if (firstPlayerResult=== false){
        setTimeout(function (){ modal.style.display ='block';
        resultDiv.textContent ='This Round is a Draw';
        resultDiv.textContent ='';
        player1.textContent ='';
        player2.textContent ='';
        location.reload();
        }, 1500);

      }
  }
  }
  let userChoice;
  function test (event){
    userChoice = event.target.id;
    console.log(userChoice);
    resultDiv.textContent= '';
  }

  
    function firstPlayerRound(){
    let cellNo;
      let row1 =board[0];
      let row2 =board[1];
      let row3=board[2]; 
      let roundCount=1;
      for (let i=0;i<roundCount;i++){
        console.log(`userChoice ${userChoice}`);
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
       console.log(`second ${userChoice}`);
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
  
  
  
   
  