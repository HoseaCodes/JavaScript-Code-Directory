kanye = document.getElementById("kanye")
kanyeBtn = document.getElementById("kanyeDisplayBtn")
kanyeClose = document.getElementById("kanyeClose")

function display(element) {
    element.style.display = "none"
}
function kanyeChange() {
    kanye.style.display = "block"
    kanyeClose.style.display = "block"
    kanyeBtn.style.display = "none"
}
function kanyeClosed() {
    kanye.style.display = "none"
    kanyeClose.style.display = "none"
    kanyeBtn.style.display = "block"
}

window.addEventListener("load", display(kanye))
window.addEventListener("load", display(kanyeClose))
kanyeBtn.addEventListener("click", kanyeChange)
kanyeClose.addEventListener("click", kanyeClosed)

// const person = {
//     name: firstName + lastName,
//     phrase: words
// }
// let word = ''
// let words = []
// while (word != 'end') {
//     word = prompt('Enter a word ("end" to quit)';
//     if (word != 'end') words.push(word);
//     alert("You've entered: " + words.join(', '))
// }
// let firstName = "Dominique";
// let lastName = "Hosea";
// let age = 28
// let PI = 3.1465
// console.log(PI.toFixed(2))

// console.log("First name: ${firstName} \nLast name: ${lastName} \nAge: ${age}")

// let score = 0
// let message = score > 100 ? "You rock!" : "Keep trying!"

// let nums = new Array(2, 4, 18);

// let num2 = [2, 4, 18]

// nums.push(10)
// num2.unshift(10)
// num2.pop()
// nums.shift()

// // splice has a syntax of: array.splice(start, deleteCount, newItem1, newItem2...)
// let removedNums = num.splice(3, 1, 10, 90)

// nums.forEach(function (num, idx) {
//     console.log(idx + ')' + num)
// })

// //Unlike forEach, the for...ofloop can be exited using the breakstatement

// for (let num of nums) {
//     if (num === 10) break;
//     console.log(num);
// }

// //The slicemethod always returns a new array and does not mutate (change) the source array
// //Unlike splice, the 2nd argument in slicerepresents the ending index (but does not include that index)
// let lastNum = nums.slice(1, 3)

// let numStr = nums.join()