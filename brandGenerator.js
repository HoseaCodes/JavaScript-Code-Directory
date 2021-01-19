window.onload = (event) => {
    document.getElementById("questionOne").innerHTML = '<span"</span>' + "What city were you raised in?" + '<span"</span>'
}

document.getElementById('btn').addEventListener('click', brandGenerator)
document.getElementById('btn2').addEventListener('click', brandGenerator2)



clicks = 0
var value1
var input = document.getElementById("userInput")
var input2 = document.getElementById("userInput2")
var btn = document.getElementById("btn")
var btn2 = document.getElementById("btn2")

function brandGenerator() {
    console.log(`Clicks start: ${clicks}`)

    if (clicks == 0) {
        var userInput = document.getElementById("userInput").value
        value1 = userInput
        clicks += 1
        input.style.display = "none"
        btn.style.display = "none"
        clear()
    }
    document.getElementById("questionTwo").innerHTML = '<span"</span>' + "What was the name of your first pet?" + '<span"</span>'
    input2.style.display = "block"
    btn2.style.display = "block"
}

function brandGenerator2() {
    var userInput2 = document.getElementById("userInput2").value
    var value2 = userInput2
    clicks += 1
    clear()
    input2.style.display = "none"
    btn2.style.display = "none"

    document.getElementById("title").innerHTML = '<span"</span>' + "Band Name: " + value1 + value2 + '<span"</span>'

}

function clear() {
    document.getElementById("userInput").value = "";
    document.getElementById("questionOne").innerHTML = "";
    if (clicks > 1) {
        document.getElementById("questionTwo").innerHTML = "";

    }
}