var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 4;
var numberOfPages = 1;

function makeList() {
    const person = {
        name: 'Dominique',
        phrase: 'Hey from Dominique'
    }
    const person2 = {
        name: 'Whit',
        phrase: 'Hey from Whit'
    }
    const person3 = {
        name: 'Tae',
        phrase: 'Hey from Tae'
    }
    const person4 = {
        name: 'Mom',
        phrase: 'Hey from Mom'
    }
    const person5 = {
        name: 'Dad',
        phrase: 'Hey from Dad'
    }
    list.push(person)
    list.push(person2)
    list.push(person3)
    list.push(person4)
    list.push(person5)
    numberOfPages = getNumberOfPages();
}

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function drawList() {
    document.getElementById("list").innerHTML = "";

    for (let index = 0; index < pageList.length; index++) {

        let obj = pageList[index];
        let div = document.createElement('div')
        let name = document.createElement('h2')
        let phrase = document.createElement('p')

        name.innerHTML = obj.name
        name.className = 'name';

        phrase.innerHTML = obj.phrase
        location.className = 'phrase';

        div.append(name)
        div.append(phrase)
        document.getElementById("list").appendChild(div);

    }
}

function check() {

    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false
    document.getElementById("pervious").disabled = currentPage == 1 ? true : false
    document.getElementById("first").disabled = currentPage == 1 ? true : false
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false

}

function loadList() {
    const begin = ((currentPage - 1) * numberPerPage);
    const end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}

function nextPage() {
    currentPage += 1
    loadList()
}

function perviousPage() {
    currentPage -= 1
    loadList()
}

function firstPage() {
    currentPage = 1
    loadList()
}

function lastPage() {
    currentPage = numberOfPages
    loadList()
}

document.getElementById("first").addEventListener("click", firstPage)
document.getElementById("last").addEventListener("click", lastPage)
document.getElementById("next").addEventListener("click", nextPage)
document.getElementById("pervious").addEventListener("click", perviousPage)

function load() {
    makeList();
    loadList();
}

window.addEventListener("load", load);
