let weathervalue = "hot"

if (weathervalue==="raining" || weathervalue === "hot"){
    document.getElementById("result").innerHTML = "Take an umberlla"
    
}
else if (weathervalue==="sunny"){
    document.getElementById("result").innerHTML = "Wear a Cooling glass"
}
else {
    document.getElementById("result").innerHTML = "Nothing Needed"
}