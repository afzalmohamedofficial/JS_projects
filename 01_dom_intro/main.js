function changetext() {
    document.getElementById("paragraph1").innerHTML = "paragraph 1 changed" 
    }


 document.getElementById("changeBtn").addEventListener('click', function(){changetext()})