function showText(id) {
    if(document.getElementById(id).style.display == "none") document.getElementById(id).style.display = "block"
    else document.getElementById(id).style.display = "none"
} 

function endLoad() {
    document.getElementById("text1").style.display = "none"
    document.getElementById("text2").style.display = "none"
    document.getElementById("text3").style.display = "none"
    document.getElementById("text4").style.display = "none"
}