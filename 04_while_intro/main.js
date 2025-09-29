document.getElementById("submit").addEventListener("click", function(){
    document.getElementById('result').innerHTML = ""
    let totallap = parseInt(document.getElementById("userinput").value)
    let current_lap = 1
    
    while (current_lap<=totallap){
        document.getElementById('result').innerHTML += `<h2>Lap ${current_lap} finised</h2>`
        current_lap++


    }
    document.getElementById('result').innerHTML += "<h1>You Won</h1>"




})