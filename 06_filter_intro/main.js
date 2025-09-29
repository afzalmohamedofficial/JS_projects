let fruits = ["apple", "orange", "grapes", "banana"]

document.getElementById('search').addEventListener('keyup', ()=>{
    document.getElementById("result").innerHTML = ""
    let  searchkey = document.getElementById('search').value

    let filtered_fruits = fruits.filter(item => {
    return item.includes(searchkey)})

    filtered_fruits.forEach(item => {
    document.getElementById("result").innerHTML+= `<h1>${item}</h1>`
    })

})
