// function changeColor(){ 
 
//     let colorInput = document.querySelector('.color_input') 
//     let color = colorInput.value 
//     let text = document.querySelector('.block') 
//     text.style.color = color 
    
// } 
 
// function changeFontSize(){ 
 
//     let text = document.querySelector('.changed_text') 
//     let input = document.querySelector('.text_input') 
//     let textSize = input.value 
//     text.style.fontSize = textSize + 'px' 
 
// } 
 
// function doubleNumber(){ 
 
//     let num = document.querySelector('.number_input').value 
//     //console.log(num*2) 
//     let output = document.querySelector('.output') 
//     output.innerHTML = num*2 
 
// } 
 
// function forNumber(){ 
 
//     let num1 = document.querySelector('.number1_input').value 
//     let num2 = document.querySelector('.number2_input').value 
//     for(; +num1 <= +num2; num1++){ 
//         console.log(num1) 
//     } 
 
// } 
 
 
let isBlock = false 
let blockTop = 0; 
let blockLeft = 0; 
let size; 
 
let inputColor = document.querySelector('.color') 
let btnDown  = document.querySelector('.down') 
let btnUp  = document.querySelector('.up') 
let btnRight  = document.querySelector('.right') 
let btnLeft  = document.querySelector('.left') 
let btnCreate  = document.querySelector('.add_button') 


btnDown.addEventListener('click', blockDown) 
btnUp.addEventListener('click', blockUp) 
btnRight.addEventListener('click', blockRight) 
btnLeft.addEventListener('click', BlockLeft) 
btnCreate.addEventListener('click', addBlock) 
inputColor.addEventListener('change', changeColor) 
 

 
 
function addBlock(){ 


    if(isBlock == true) return 
    size = document.querySelector('.size_input').value 
    let wrapper = document.querySelector('.wrapper_block') 
    size = +size 
 
    if(size <= 50 || size>=500) return  
    let block = document.createElement('div') 
    block.classList.add('block') 
    block.style.width = size + 'px' 
    block.style.height = size + 'px' 
    wrapper.insertAdjacentElement('afterbegin', block) 
    isBlock = true 
} 
 
function blockDown(){ 
 
    let block = document.querySelector('.block') 
    if(size + blockTop + 10 > 500) return 
    blockTop += 10 
    block.style.marginTop = blockTop + 'px' 
} 
 
function blockUp(){ 
 
    let block = document.querySelector('.block') 
    if(blockTop <= 0) return 
    blockTop -= 10 
    block.style.marginTop = blockTop + 'px' 
 
} 
function blockRight(){ 
 
    let block = document.querySelector('.block') 
    if(size + blockLeft + 10 > 500) return 
    blockTop += 10 
    block.style.marginLeft = blockLeft + 'px' 
} 
 
function BlockLeft(){ 
 
    let block = document.querySelector('.block') 
    if(blockTop <= 0) return 
    blockTop -= 10 
    block.style.marginTop = blockTop + 'px' 
}

function changeColor(){
    let changeNewColor = document.querySelector('.color').value
    let block = document.querySelector('.block')
    block.style.backgroundColor = changeNewColor       
}