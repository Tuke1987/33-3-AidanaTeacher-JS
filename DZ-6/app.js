const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === ''){
        return alert('Uncorrected value')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons =  document.createElement('button')
    divButtons.setAttribute('class', 'div_Button')

    const text =  document.createElement('h3')
    text.setAttribute('class', 'h3')

    const deleteButton =  document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    const editButton =  document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'DElETE'
    editButton.innerHTML = 'EDIT'

    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)

    deleteButton.onclick = () => div.remove()
    text.addEventListener('click', () => text.classList.toggle('toggle'))


    editButton.onclick = () => {
        const editedText = prompt(`Edited -> ${text.innerHTML}`)
        editedText === '' ? alert('Нельзя вводить пустоту'): text.innerHTML = editedText
    }


    todoList.prepend(div)
    input.value = ''


}

createButton.onclick = () => createTodo()