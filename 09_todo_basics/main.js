// user can create their task completed
// user can delete a task
// user can able to search tasks
// user can update a task as complete and undo

let tasks = []
let resultelement = document.getElementById("result")

function rendertask(array){
    // reset result element
    resultelement.innerHTML = ""
    // append all values in result
    array.forEach((item, index) => {
        resultelement.innerHTML += `<div>
        <h1><input type="checkbox" onchange="toggleComplete(${item.id})" ${item.isCompleted ? "checked" : ""}>${item.name} - ${item.isCompleted ? "Completed" : "" }</h1>
        <button onclick="deletetask(${item.id})">Delete</button>
        </div>`
    })
}

function deletetask(taskID){
    tasks = tasks.filter(item => item.id != taskID)
    rendertask(tasks)
}

document.getElementById("addbtn").addEventListener("click", ()=>{
    // get input value
    let value = document.getElementById("taskinput").value
    let obj = {id: Date.now(), name: value, isCompleted: false}

    // push value to array
    tasks.push(obj)
    rendertask(tasks)
    })

document.getElementById("searchInput").addEventListener("keyup",  ()=>{
    let search_key = document.getElementById("searchInput").value
    let searchedTasks = tasks.filter(item =>{
        return item.name.includes(search_key)
    })
    resultelement.innerHTML = ""
    rendertask(searchedTasks)
})

function toggleComplete(taskID){
    tasks = tasks.map((item) =>{
        if (item.id==taskID) {
            item.isCompleted = !item.isCompleted
            return item
        } else {
            return item
            
        }
    })
    rendertask(tasks)
}