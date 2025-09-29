



document.getElementById('joinbtn').addEventListener('click', function(){
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value

    if (firstname ==="" || lastname===""){
    document.getElementById("result").innerHTML = "Please check all input"
    
}


    else {
        document.getElementById('result').innerHTML =  `${firstname} ${lastname}`
    }
    
})

