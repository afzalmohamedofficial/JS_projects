let emails = ["afzal@gmail.com", "admin@gmail.com"]

document.getElementById("clickbtn").addEventListener('click', ()=>{
    let current_email = document.getElementById("input").value

    let email = emails.find(item =>{
        return current_email === item
    })

    if (email===undefined){
        document.getElementById("result").innerHTML = "Email is not Found"

    }

    else{
        document.getElementById("result").innerHTML = "Email is Found"

    }

})