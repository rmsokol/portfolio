// javascript
let currentlyLearning = [
"HTML",

"CSS",

"JavaScript",

"React",

"APIs",

"Web architecture",

"Responsive design",

"Web design",

"UI Design",

"Git",

"Web Application Security",

"OWASP",

"The Cloud"

]

const keyword = document.getElementById("keyword")

// function to pick a random object from array and render it to DOM
function getRandom(){
    let index = Math.floor(Math.random() * currentlyLearning.length)
         keyword.innerHTML = currentlyLearning[index]
         
}

setInterval(getRandom, 3500)


