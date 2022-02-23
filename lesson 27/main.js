let createBtn = document.querySelector('.btn_create')  
let cardArr = []  
createBtn.addEventListener('click', addCard)  
let countCard = 1  
function addCard () {  
let title = document.querySelector('.card_title').value  
let text = document.querySelector('.card_text').value  
  

if(title==''||text==''|| title.length>20)return  
let currentDate = new Date ()  
let date = currentDate.getFullYear() + '.' + (Number(currentDate.getMonth())+1) + '.' + currentDate.getDate()  
      
  
const card = {  
    'title': title,  
    'text': text,  
    'date': date,  
}  
let cardBlock = document.createElement('div')  
cardBlock.classList.add('card')  
cardBlock.addEventListener('dragstart', dragStart)  
cardBlock.addEventListener('dragend', dragEnd)  
cardBlock.draggable = true  
cardBlock.insertAdjacentHTML('beforeend',    
    `<div class="card_number">${countCard}</div>  
    <div class="card_info">  
    <div class="card_title">${card.title}</div>  
    <div class="card_text">${card.text}</div>  
    <div class="card_date">${card.date}</div>  
    </div>`)  
countCard++  
let wrapper = document.querySelector('.wrapper')  
wrapper.insertAdjacentElement('beforeend', cardBlock)  
document.querySelector('.card_title').value=' '  
document.querySelector('.card_text').value=' '  
}  
 
  
let draggableCard  
  
function dragStart () {  
    draggableCard=this  
}  
 
function dragEnd(){  
    draggableCard = null  
}  
let wrappers = document.querySelectorAll('.wrapper')  
 
  
// for(let i=0; i<wrappers.length;i++) {  
//     console.log(wrappers[i])  
// }  
 
wrappers.forEach(wrapper => {  
   wrapper.addEventListener('dragover', dragOver)  
});  
 
function dragOver () {  
  this.insertAdjacentElement('beforeend', draggableCard)  
}
let plus = document.querySelector('.btn_plus_wrapper')
