// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardWidth = 1200;
// let boardHeight = 800;
// let square = 50;
// let snakeCells = [[0,0]]

// //draw the snake
// function draw(){}

// //update the snake
// function update(){}


// //for repeating tasks every 200 milli secs
// setInterval(function(){

// } , 200)

//--------------------PART-2 & 3----------------------------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardWidth = 1200;
// let boardHeight = 800;
// let square = 50;
// let snakeCells = [[0, 0], [50, 0]]

// //draw the snake
// function draw() {
//     //rubber
//     ctx.clearRect(0,0,boardWidth,boardHeight)
//     //draw
//     for (let cell of snakeCells) {
//         cell[0] // x coordinate
//         cell[1] // y coordinate
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],square,square)

//     }
// }

// //update the snake
// function update() { 
//     let headX = snakeCells[snakeCells.length-1][0]   //snakeCells[1][0] --> 50
//     let headY = snakeCells[snakeCells.length-1][1]   //snakeCells[1][1] --> 0
// let newHeadX = headX + square; //100
// let newHeadY = headY; //0
// snakeCells.push([newHeadX,newHeadY]);
// snakeCells.shift()

// }


// //for repeating tasks every 200 milli secs
// setInterval(function () {
//     update();
//     draw();
// }, 100)

// ---------------------PART-4 & 5-----------------------------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardWidth = 1200;
// let boardHeight = 800;
// let square = 50;
// let snakeCells = [[0, 0], [50, 0]];
// let direction = "right";


// //jahan chaho le jao snake ko
// document.addEventListener('keydown', function (event) {
//     if (event.key === "ArrowDown") { direction = "down" }
//     else if (event.key === "ArrowUp") { direction = "up" }
//     else if (event.key === "ArrowLeft") { direction = "left" }
//     else if (event.key === "ArrowRight") { direction = "right" }

// })

// //draw the snake
// function draw() {
//     //rubber
//     ctx.clearRect(0, 0, boardWidth, boardHeight)
//     //draw
//     for (let cell of snakeCells) {
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0], cell[1], square, square)

//     }
// }

// //update the snake
// function update() {
//     let headX = snakeCells[snakeCells.length - 1][0]   //snakeCells[1][0] --> 50
//     let headY = snakeCells[snakeCells.length - 1][1]   //snakeCells[1][1] --> 0
//     let newHeadX;
//     let newHeadY; 
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - square;
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + square;
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - square;
//         newHeadY = headY;
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + square;
//         newHeadY = headY;
//     }

//     snakeCells.push([newHeadX, newHeadY]);
//     snakeCells.shift()

// }


// //for repeating tasks every 200 milli secs
// setInterval(function () {
//     update();
//     draw();
// }, 100)

//----------------------------PART - 6-----------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardWidth = 1200;
// let boardHeight = 800;
// let square = 50;
// let snakeCells = [[0, 0], [50, 0]];
// let direction = "right";
// let gameOver = false;

// //jahan chaho le jao snake ko
// document.addEventListener('keydown', function (event) {
//     if (event.key === "ArrowDown") { direction = "down" }
//     else if (event.key === "ArrowUp") { direction = "up" }
//     else if (event.key === "ArrowLeft") { direction = "left" }
//     else if (event.key === "ArrowRight") { direction = "right" }

// })

// //draw the snake
// function draw() {
//     if(gameOver === true){
//         clearInterval(id);
//         return
//     }
//     //rubber
//     ctx.clearRect(0, 0, boardWidth, boardHeight)
//     //draw
//     for (let cell of snakeCells) {
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0], cell[1], square, square)

//     }
// }

// //update the snake
// function update() {
//     let headX = snakeCells[snakeCells.length - 1][0]   //snakeCells[1][0] --> 50
//     let headY = snakeCells[snakeCells.length - 1][1]   //snakeCells[1][1] --> 0
//     let newHeadX;
//     let newHeadY; 
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - square;
//         if(newHeadY<0){gameOver = true}
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + square;
//         if(newHeadY===boardHeight){gameOver = true}
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - square;
//         newHeadY = headY;
//         if(newHeadX<0){gameOver = true}

//     }
//     else if(direction === 'right'){
//         newHeadX = headX + square;
//         newHeadY = headY;
//         if(newHeadX===boardWidth){gameOver = true}

//     }

//     snakeCells.push([newHeadX, newHeadY]);
//     snakeCells.shift()

    

// }


// //for repeating tasks every 200 milli secs
// let id = setInterval(function () {
//     update();
//     draw();
// }, 100)

// --------------------------------------------PART-7--------------------------------------------------------

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// let boardHeight = 800;
// let boardWidth = 1200;
// let sqaure = 50;
// let snakeCells = [ [0,0],[50,0] ];
// let direction = "right";
// let gameOver = false;

// let foodCell = generateRandomFood();

// // jahan chaho vahan lejaao snake ko
// document.addEventListener('keydown' , function(event){
//     if(event.key === "ArrowDown"){direction = "down"}
//     else if(event.key === "ArrowUp"){direction = "up"}
//     else if(event.key === "ArrowLeft"){direction = "left"}
//     else if(event.key === "ArrowRight"){direction = "right"}
// })

// // draw the snake
// function draw(){
//     if(gameOver === true){
//         clearInterval(id);
//         return
//     }

//     ctx.clearRect(0,0,boardWidth,boardHeight)
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],sqaure,sqaure)
//     }

//     // draw food
//     ctx.fillStyle = "orange"
//     ctx.fillRect(foodCell[0] , foodCell[1] , sqaure,sqaure)
// }

// // update the snake
// function update(){
//     let headX = snakeCells[snakeCells.length-1][0] 
//     let headY = snakeCells[snakeCells.length-1][1] 
//     let newHeadX; 
//     let newHeadY; 
//     if(direction === 'up'){
//         newHeadX = headX;
//         newHeadY = headY - sqaure;
//         if(newHeadY<0){gameOver = true}
//     }
//     else if(direction === 'down'){
//         newHeadX = headX;
//         newHeadY = headY + sqaure;
//         if(newHeadY===boardHeight){gameOver = true}
//     }
//     else if(direction === 'left'){
//         newHeadX = headX - sqaure;
//         newHeadY = headY ;
//         if(newHeadX<0){gameOver = true}
//     }
//     else if(direction === 'right'){
//         newHeadX = headX + sqaure;
//         newHeadY = headY ;
//         if(newHeadX===boardWidth){gameOver = true}
//     }

//     snakeCells.push([newHeadX,newHeadY]);
//     snakeCells.shift()
// }

// function generateRandomFood(){
//     return [
//        Math.round(Math.random()*(boardWidth - sqaure) / sqaure)*sqaure , //x
//        Math.round(Math.random()*(boardHeight - sqaure) / sqaure)*sqaure //y
//     ]
// }

// // for repeating tasks every 200 milli secs
// let id = setInterval(function(){
//     update();
//     draw();
// } , 100)

// -------------------------------------
// part-8 


// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';
// let gameOver = false;

// let foodCells = generateRandomFood();

// document.addEventListener('keydown' , (event)=>{
//     if(event.key === 'ArrowUp'){direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// })

// function draw(){
//     if(gameOver === true){
//         clearInterval(id);
//         return;
//     }
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
//     // draw food
//     ctx.fillStyle = "orange"
//     ctx.fillRect(foodCells[0] , foodCells[1] , cellSize , cellSize)
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX;
//     let newHeadY;
//     if(direction ==='up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//         if(newHeadY < 0){gameOver = true}
//     }
//     else if(direction ==='down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//         if(newHeadY === boardHeight){gameOver=true}
//     }
//     else if(direction ==='left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY;
//         if(newHeadX <0){gameOver = true}
//     }
//     else if(direction ==='right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY;
//         if(newHeadX === boardWidth){gameOver=true}
//     }
//     snakeCells.push([newHeadX , newHeadY]);
//     if(newHeadX === foodCells[0] && newHeadY === foodCells[1]){
//         foodCells = generateRandomFood()
//     }else{
//         snakeCells.shift()
//     }
// }


// function generateRandomFood(){
//     return [
//         Math.round(Math.random()*(boardWidth-cellSize)/cellSize)*cellSize ,  //x
//         Math.round(Math.random()*(boardHeight-cellSize)/cellSize)*cellSize   //y
//     ]
// }

// let id = setInterval(function(){
//     update()
//     draw()
// } , 100)



// -------------------------------------
// part-9

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';
// let gameOver = false;

// let foodCells = generateRandomFood();
// let score = 0;

// document.addEventListener('keydown' , (event)=>{
//     if(event.key === 'ArrowUp'){direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// })

// function draw(){
//     if(gameOver === true){
//         clearInterval(id);
//         ctx.fillStyle = "red"
//         ctx.font = "50px sans-serif"
//         ctx.fillText('GAME OVER !!' , 430,400)
//         return;
//     }
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
//     // draw food
//     ctx.fillStyle = "orange"
//     ctx.fillRect(foodCells[0] , foodCells[1] , cellSize , cellSize)
//     // draw score
//     ctx.font = "20px monospace"
//     ctx.fillText(`Score: ${score}` , 20,30)
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX;
//     let newHeadY;
//     if(direction ==='up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//         if(newHeadY < 0){gameOver = true}
//     }
//     else if(direction ==='down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//         if(newHeadY === boardHeight){gameOver=true}
//     }
//     else if(direction ==='left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY;
//         if(newHeadX <0){gameOver = true}
//     }
//     else if(direction ==='right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY;
//         if(newHeadX === boardWidth){gameOver=true}
//     }
//     snakeCells.push([newHeadX , newHeadY]);
//     if(newHeadX === foodCells[0] && newHeadY === foodCells[1]){
//         foodCells = generateRandomFood()
//         score+=1;
//     }else{
//         snakeCells.shift()
//     }
// }


// function generateRandomFood(){
//     return [
//         Math.round(Math.random()*(boardWidth-cellSize)/cellSize)*cellSize ,  //x
//         Math.round(Math.random()*(boardHeight-cellSize)/cellSize)*cellSize   //y
//     ]
// }

// let id = setInterval(function(){
//     update()
//     draw()
// } , 100)


// -------------------------------------
// part-10

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardWidth = 1200;
let boardHeight = 800;
let snakeCells = [[0,0] , [50,0]] ;
let direction = 'right';
let gameOver = false;

let foodCells = generateRandomFood();
let score = 0;

document.addEventListener('keydown' , (event)=>{
    if(event.key === 'ArrowUp'){direction = "up"}
    else if(event.key === 'ArrowDown'){direction = "down"}
    else if(event.key === 'ArrowLeft'){direction = "left"}
    else if(event.key === 'ArrowRight'){direction = "right"}
})

function draw(){
    if(gameOver === true){
        clearInterval(id);
        ctx.fillStyle = "red"
        ctx.font = "50px sans-serif"
        ctx.fillText('GAME OVER !!' , 430,400)
        return;
    }
    // eraser
    ctx.clearRect(0,0,1200,800)
    // draw
    for(let cell of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
        ctx.strokeStyle = "golden"
        ctx.strokeRect(cell[0],cell[1],cellSize,cellSize )
    }
    // draw food
    ctx.fillStyle = "orange"
    ctx.fillRect(foodCells[0] , foodCells[1] , cellSize , cellSize)
    // draw score
    ctx.fillStyle = "white"
    ctx.font = "20px monospace"
    ctx.fillText(`Score: ${score}` , 20,30)
}

function update(){ 
    let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
    let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
    let newHeadX;
    let newHeadY;
    if(direction ==='up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0 || ex(newHeadX , newHeadY)){gameOver = true}
    }
    else if(direction ==='down'){
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight || ex(newHeadX , newHeadY)){gameOver=true}
    }
    else if(direction ==='left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX <0 || ex(newHeadX , newHeadY)){gameOver = true}
    }
    else if(direction ==='right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth || ex(newHeadX , newHeadY)){gameOver=true}
    }
    snakeCells.push([newHeadX , newHeadY]);
    if(newHeadX === foodCells[0] && newHeadY === foodCells[1]){
        foodCells = generateRandomFood()
        score+=1;
    }else{
        snakeCells.shift()
    }
}


function generateRandomFood(){
    return [
        Math.round(Math.random()*(boardWidth-cellSize)/cellSize)*cellSize ,  //x
        Math.round(Math.random()*(boardHeight-cellSize)/cellSize)*cellSize   //y
    ]
}

function ex(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}

let id = setInterval(function(){
    update()
    draw()
} , 150)