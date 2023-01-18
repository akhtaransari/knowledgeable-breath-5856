let sign_in_display = document.querySelector(".signin")
let sign_in_hover = document.getElementById("open_sign_in")

sign_in_hover.addEventListener("mouseenter",()=>{
sign_in_display.style.display = "block"
})

sign_in_display.addEventListener("mouseleave",()=>{
    sign_in_display.style.display = "none"
 })

let login = document.querySelector("#sign button")
let reg = document.getElementById("reg")
console.log(login)

login.addEventListener("click",()=>{
    reg.style.visibility = "visible"
})