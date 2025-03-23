// DOM: Document Object Model
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass)

// elemClass[0].style.background = "yellow"
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// elemClass[0].classList.remove("text-success")

// console.log(elem.innerHTML)
// console.log(elem.innerText)
console.log(elemClass[0].innerHTML)
console.log(elemClass[0].innerText)

btn = document.getElementsByTagName('button')
console.log(btn)
btn = document.getElementsByTagName('div')
console.log(btn)

createdElement=document.createElement('p')
createdElement.innerText="This is created para"
btn[0].appendChild(createdElement)
createdElement2=document.createElement('b')
createdElement2.innerText="This is created bold"
btn[0].replaceChild(createdElement2, createdElement)

console.log(document.scripts)
console.log(document.links)
console.log(document.domain)

// Selection using Query
q1=document.querySelector('.container')
console.log(q1)
q1=document.querySelectorAll('.container')
console.log(q1)