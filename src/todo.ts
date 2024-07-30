const taskInput=document.getElementById('taskInput') as HTMLInputElement
const addTaskButton=document.getElementById('addTaskButton') as HTMLInputElement
const taskList=document.getElementById('taskList') as HTMLInputElement

addTaskButton.onclick=()=>{
    const taskText=taskInput.value.trim()
    if (taskText){
        addTask(taskText)
        taskInput.value=''
    }
}

function addTask(taskText:string){
    const listItem=document.createElement('li')
    const taskSpan=document.createElement('span')
    taskSpan.textContent=taskText
    listItem.appendChild(taskSpan)

    const editButton=document.createElement('button')
    editButton.textContent='Edit'
    editButton.onclick=()=>{
        const newTaskText=prompt('Edit your task:',taskSpan.textContent || '')
        if (newTaskText){
            taskSpan.textContent=newTaskText
        }
        
    }
    listItem.appendChild(editButton)

    const removeButton=document.createElement('button')
    removeButton.textContent='Remove'
    removeButton.onclick=()=>{
        listItem.remove()
    }
    listItem.appendChild(removeButton)
    taskList.append(listItem)
}