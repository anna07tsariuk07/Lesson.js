function addBlock(){

    let size = document.querySelector('.size_input').value
    let wrapper = document.querySelector('.wrapper_block')

    if(+size <= 50 || +size>=500) return 


    let block = document.createElement('div')
    block.classList.add('block')
    
    block.style.width = size + 'px'
    block.style.height = size + 'px'
    

    wrapper.insertAdjacentElement('afterbegin', block)

}