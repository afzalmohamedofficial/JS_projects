// user can create their task completed
// user can delete a task
// user can able to search tasks
// user can update a task as complete and undo


let tasks = []
let resultelement = document.getElementById("result")


function rendertask(){
    // reset result element
    resultelement.innerHTML = ""
    // append all values in result
    tasks.forEach((item, index) => {
        resultelement.innerHTML += `<div>
        <h1>${item}</h1>
        <button onclick="deletetask(${index})">Delete</button>
        </div>`
    })
}

function deletetask(index){
    tasks.splice(index, 1)
    rendertask()
}

document.getElementById("addbtn").addEventListener("click", ()=>{
    // get input value
    let value = document.getElementById("taskinput").value

    // push value to array
    tasks.push(value)
    rendertask()
    })

