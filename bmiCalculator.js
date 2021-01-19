var bmi = document.getElementById("bmi")
var bmiText = document.getElementById("dynamic")
var bmiHeight
var bmiWeight
bmi.addEventListener("click", addElement)

function addElement() {
    const bmiSection = document.getElementById("BMI")
    const newDiv = document.createElement("div")
    document.body.insertBefore(newDiv, bmiSection)
    const bmiTitle = document.createElement("h2")
    const h1Title = document.createTextNode("BMI Calculator")
    bmiTitle.appendChild(h1Title)
    newDiv.appendChild(bmiTitle)
    const br = document.createElement("br")
    const heightInput = document.createElement("input")
    heightInput.setAttribute("type", "text")
    heightInput.setAttribute("placeholder", "Please enter height")
    heightInput.id = "height"
    newDiv.appendChild(heightInput)
    newDiv.appendChild(br.cloneNode());
    newDiv.appendChild(br.cloneNode());
    const weightInput = document.createElement("input")
    weightInput.setAttribute("type", "text")
    weightInput.setAttribute("placeholder", "Please enter weight")
    weightInput.id = "weight"
    newDiv.appendChild(weightInput)
    newDiv.appendChild(br.cloneNode());
    newDiv.appendChild(br.cloneNode());
    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("value", "submit")
    submit.id = "calculate"
    newDiv.appendChild(submit)
    bmi.style.display = "none"
    bmiText.style.display = "none"
    document.getElementById("calculate").addEventListener("click", bmiCalculation)
}


function calculation(height, weight) {
    height * 3.2808
    weight * 2.2046

    total = (weight / height) ** 2;

    const total = document.createElement("h2")
    if (total < 18.5) {
        const totalH2 = document.createTextNode("You are underweight")
        total.appendChild(totalH2)
    }
    else if (total > 18.5 && total < 25) {
        const totalH2 = document.createTextNode("You are within a normal range.")
        total.appendChild(totalH2)
    }
    else if (total > 25 && total < 30) {
        const totalH2 = document.createTextNode("You are overwieght.")
        total.appendChild(totalH2)
    }
    else {
        const totalH2 = document.createTextNode("You are obese.")
        total.appendChild(totalH2)
    }
}

function bmiCalculation() {
    var bmiHeight = document.getElementById('height').value
    var bmiWeight = document.getElementById('weight').value
    calculation(bmiHeight, bmiWeight)
}