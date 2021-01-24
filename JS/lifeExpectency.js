// Variables

const dayInYear = 365;
const weeksInYear = 52;
const monthsInYear = 12;
const death = 90;

const userAge = document.getElementById("age").value


const lifeRes = document.getElementById("lifeRes")
const ageBtn = document.getElementById("ageBtn")

function generateLifeExpectency() {
    console.log("click")
    useAge = parseInt(userAge)

    const lifeSpan = death - userAge;
    const lifeSpanDay = lifeSpan * dayInYear;
    const lifeSpanWeek = lifeSpan * weeksInYear;
    const lifeSpanMonth = lifeSpan * monthsInYear;

    lifeRes.innerHTML = '<span>' + "You have " + lifeSpanDay + " days, " + lifeSpanWeek + " weeks, " + lifeSpanMonth + " months left." + '</span >'
    clear()
}
function clear() {
    document.getElementById("lifeRes").value = "";
}

ageBtn.addEventListener("click", generateLifeExpectency)
