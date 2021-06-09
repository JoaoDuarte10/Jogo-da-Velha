document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    console.log(event.target);
    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquares();
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        let position = square.id;
        let simbol = board[position]

        if(simbol != '') square.innerHTML = `<div class='${simbol}'></div>`
    })
}