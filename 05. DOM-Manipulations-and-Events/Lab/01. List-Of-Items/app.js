function addItem() {

    let items = document.getElementById('items');
    let newItem = document.getElementById('newItemText').value;
    let toAdd = document.createElement('li');
    toAdd.textContent = newItem;
    items.appendChild(toAdd);
    
    document.getElementById('newItemText').value = '';
}