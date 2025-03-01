let btn1 = document.querySelector("#pink")
let btn2 = document.querySelector("#purple")
let btn3 = document.querySelector("#green")
let btn4 = document.querySelector("#yellow")
//option two
btn1.onclick = function makePink(){
    document.body.style.backgroundColor = 'pink'

}
//option three
btn2.onclick = makePurple;
function makePurple(){
    document.body.style.backgroundColor='purple'
}
//option one
function makeViolet(){
    document.body.style.backgroundColor = 'violet'
}
function makeRed(){
    document.body.style.backgroundColor = 'red'
}
//option four by addlistener
btn3.addEventListener("click", function makeGreen(){
    document.body.style.backgroundColor='green'
})
//using arrow function
btn4.addEventListener("click", makeYellow = () =>{
     document.body.style.backgroundColor='yellow'
})