function addItem() {
    
    let input = document.querySelector('#newItemText')
    let listInHTML = document.querySelector('#items')

    let newElement = document.createElement('li')
    newElement.textContent = input.value

    let deleteItem = document.createElement('a')
    deleteItem.setAttribute('href', '#')

    deleteItem.textContent = `[Delete]`

    deleteItem.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove()
    })

    newElement.appendChild(deleteItem)
    listInHTML.appendChild(newElement)
    input.value = '';
}