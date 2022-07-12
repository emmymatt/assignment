window.onload = () =>   
{
    const tasks = []

    const addTask = document.getElementById('todo-input')
    const addButton = document.getElementById('todo-button')
    const todoList = document.getElementById('todo-list')

    const createTask = (task) => {
        const taskElement = document.createElement('div')
        const checkbox = document.createElement('input')
        checkbox.id = task
        checkbox.type = 'checkbox'
        checkbox.name = 'task'
        checkbox.addEventListener('click', () => {
            const labels = document.getElementsByTagName('label')
            let checklabel
            for(let label in labels){
                if(labels[label].htmlFor === checkbox.id){
                    checklabel = labels[label]
                }
            }
            if (checkbox.checked) {
                checklabel.style.textDecoration = 'line-through'
            }
            else {
                checklabel.style.textDecoration = 'none'
            }
        })
        const label = document.createElement('label')
        label.htmlFor = task
        label.innerText = task
        taskElement.appendChild(checkbox)
        taskElement.appendChild(label)
        taskElement.classList.add('todo-item')
        return taskElement
    }

    addButton.addEventListener('click', () => {
        const task = addTask.value
        if (task) {
            tasks.push(task)
            addTask.value = ''
            todoList.appendChild(createTask(task))
        }
        else {
            alert('Please enter a task')
        }
    })
}
