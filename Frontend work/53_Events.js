function clicked() {
    console.log('The button was clicked')
}

window.onload = function () {
    console.log('Document loaded')
}

firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log('The Container was clicked')
})

// secContainer.addEventListener('mouseover', function () {
//     console.log("Mouse on Container")
// })

// secContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container")
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML
secContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML
    console.log("Mouse up when clicked on Container")
})

secContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
    console.log("Mouse down when clicked on Container")
})
