let board = ['','','','','','','','',''];
let playerTime = 00;
let simbols = ['o', 'x'];

function handleMove(position) {
    if(board[position] == '') board[position] = simbols[playerTime];
    
    if(playerTime == 0) playerTime = 1;
    else playerTime = 0;
}