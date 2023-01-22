
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


login.addEventListener("click",()=>{
    reg.style.visibility = "visible"
})






let login2 = document.getElementById("club")
login2.addEventListener("click",()=>{
    reg.style.visibility = "visible"
})






let register_button = document.querySelectorAll("#reg_button")


let reg2 = document.getElementById("reg2")
    register_button[0].addEventListener("click",()=>{
        reg.style.visibility = "hidden"
        reg2.style.visibility = "visible"
    })
    register_button[1].addEventListener("click",()=>{
        reg.style.visibility = "hidden"
        reg2.style.visibility = "visible"
    })

let login_button = document.querySelectorAll("#login_button")
   
    login_button[0].addEventListener("click",()=>{
        reg2.style.visibility = "hidden"
        reg.style.visibility = "visible"
    })

    login_button[1].addEventListener("click",()=>{
        reg2.style.visibility = "hidden"
        reg.style.visibility = "visible"
    })

    login_button[2].addEventListener("click",()=>{
        reg2.style.visibility = "hidden"
        reg.style.visibility = "visible"
        verify.style.visibility = "hidden"
    })



    

    let registration_done = document.getElementById("registration_done")
    let sp = ".@" 
    let login_form = document.getElementById("login_form")
    let verify = document.getElementById("verify")
        login_form.addEventListener("submit",(e)=>{
            e.preventDefault()
            if (login_form.mobile.value.length  >= 10 || login_form.mobile.value.includes(".")===true && login_form.mobile.value.includes("@")===true ){




                reg2.style.visibility = "hidden"
                reg.style.visibility = "hidden"
                verify.style.visibility = "visible"
                login_task(login_form)
                
            }else {
                alert(" Enter Mobile or email")



                // reg2.style.visibility = "hidden"
                // reg.style.visibility = "hidden"
                // verify.style.visibility = "visible"
                login_task(login_form)
                
            }else {
                alert(" Enter Correct Mobile or email")


            }


        })

        let close_form = document.querySelectorAll("#close")

        for (let i = 0 ; i < close_form.length ;i++){
            close_form[i].addEventListener("click",()=>{
                reg2.style.visibility = "hidden"
                reg.style.visibility = "hidden"
                verify.style.visibility = "hidden"
            })
        }

        let promo_images = ["./Images/1.jpg","./Images/2.jpg","./Images/3.jpg","./Images/4.jpg","./Images/5.jpg"]
        let slide = document.getElementById("slide")

        let images_count = 0;

        setInterval(() => {
            slide.setAttribute("src",promo_images[images_count])
            images_count++    
            if (images_count === 5){
                images_count = 0
            }
        }, 3000);

// ============================================================
// open close animation all part done
// below need to wrok on login and re directing to new page and changing all link 


let reg_form = document.getElementById("reg_form")
let reg_data = JSON.parse(localStorage.getItem("reg_data")) || [ {email:"test@test.test",reg_number:"",reg_password:""}]
let regg22 = document.getElementById("reg22")
let reg22_h1 = document.createElement("h1")


let reg_form = document.getElementById("reg_form")
let reg_data = JSON.parse(localStorage.getItem("reg_data")) || []
let regg22 = document.getElementById("reg22")
let reg22_h1 = document.createElement("h1")


function login_number(mobile) {
    for (let i = 0 ; i < reg_data.length ;i ++){
        if (mobile === reg_data[i].reg_number){
            console.log("yes")
            return true
        }
            
        
    }
    return false
}

function login_password(pass) {
    for (let i = 0 ; i < reg_data.length ;i ++){
        if (pass === reg_data[i].reg_password){
            return true
        }

    }
    return false
}

let reg_form = document.getElementById("reg_form")
let reg_data = JSON.parse(localStorage.getItem("reg_data")) || [ {email:"test@test.test",reg_number:"1111111111",reg_password:"123456"}]
let regg22 = document.getElementById("reg22")
let reg22_h1 = document.createElement("h1")



        reg_form.addEventListener("submit",(e)=>{
            e.preventDefault()
            let reg_obj = {
                email : reg_form.reg_email.value,
                reg_number : reg_form.reg_number.value,
                reg_password : reg_form.reg_password.value
            }
           
            reg_data.forEach(element => {
                if (element.reg_number === reg_form.reg_number.value || element.reg_email === reg_form.reg_email.value ){
                    regg22.innerHTML = ""
                    reg22_h1.innerText = "Hey You Are Already registerd with us please login"
                    regg22.append(reg22_h1)

                setTimeout(() => {
                reg2.style.visibility = "hidden"
                reg.style.visibility = "visible"
                verify.style.visibility = "hidden"

                }, 2500);
                }else {
                    reg_data.push(reg_obj);
                    
                    regg22.innerHTML = ""
                    reg22_h1.innerText = "Congrats Your regitration Is Successful"
                    regg22.append(reg22_h1)

                    setTimeout(() => {
                        reg2.style.visibility = "hidden"
                        reg.style.visibility = "visible"
                        verify.style.visibility = "hidden"
        
                        }, 2500);
                }
            });
           
            localStorage.setItem("reg_data",JSON.stringify(reg_data))

        })



                if (reg_obj.reg_number.length >= 10){
                    if ( reg_obj.reg_password.includes("!") ||
                         reg_obj.reg_password.includes("#") ||
                         reg_obj.reg_password.includes("$") ||
                         reg_obj.reg_password.includes("%") ||
                         reg_obj.reg_password.includes("&") &&
                         reg_obj.reg_password > 7
                        ){
                        final_reg()
                    }else {
                        alert("Password Must Content any !@#$%&"+'\n'+" Password Must Minimum 8 Digits")
                    }
                }else {
                    alert("Number should be 10 Digit")
                }

                function final_reg(){
                    regg22.innerHTML = ""
                    reg22_h1.innerText = "Registration Succesfull PLease Login"
                      regg22.append(reg22_h1)
    
                    setTimeout(() => {
                    reg2.style.visibility = "hidden"
                    reg.style.visibility = "visible"
                    verify.style.visibility = "hidden"
    
                    }, 2500);
                    reg_data.push(reg_obj);
                    localStorage.setItem("reg_data",JSON.stringify(reg_data))
                }

                
            });
           





        
        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++?


        function login_task(login){
            let verify_password = document.getElementById("verify_password")

            let succes_login = document.getElementById("succes")
            let verify_status = document.querySelector("#succes h2")



            reg_data.forEach(element => {
                if (element.reg_number === login.mobile.value){
                    verify_password.addEventListener("submit",(e)=>{
                        e.preventDefault()

                        if (element.reg_password === verify_password.verify_password_input.value){

                        if (element.reg_password === verify_password.verify_password.input.value){
                            console.log("yes")
                        }
                    })
                }
            });
        }

            let succes_login = document.getElementById("succes")
            let verify_status = document.querySelector("#succes h2")
                if (login_number(login.mobile.value) === true){
                    reg2.style.visibility = "hidden"
                    reg.style.visibility = "visible"
                    verify.style.visibility = "visible"
                    
                    verify_password.addEventListener("submit",(e)=>{
                        e.preventDefault()  
                        console.log(verify_password.verify_password_input.value)
                        if (login_password(verify_password.verify_password_input.value) === true){

                            succes_login.innerHTML = ""
                            reg22_h1.innerText = "Login Successful"
                            succes_login.append(reg22_h1)
                            sign_in_hover.innerHTML =  ""

                            let name = ""
                            for (let i = 0 ; i < element.email.length ;i++){
                                if (i === 0){
                                    name += element.email[i].toUpperCase()
                                    continue
                                }
                                if (element.email[i] === "@"){
                                    break;
                                }
                                name+=element.email[i]
                            }
                             
                            sign_in_hover.innerText = name


                        
                            setTimeout(() => {
                                reg2.style.visibility = "hidden"
                                reg.style.visibility = "hidden"
                                verify.style.visibility = "hidden"
                
                                }, 2500);
                        }else{

                            console.log("no")
                            verify_status.innerText = "Wrong Input Try Again"
                            verify_status.style.color = "red"
                            setTimeout(() => {
                                verify_status.innerText = "Verification"

                            console.log("no logged")
                            verify_status.innerText = "Wrong Input Try Again"
                            verify_status.style.color = "red"

                            setTimeout(() => {
                            verify_status.innerText = "Verification"

                            verify_status.style.color = "black"
                            }, 2000);
                        }
                    })

                }
            });

                }else {
                    alert("Please Regster")
                    reg2.style.visibility = "visible"
                }

        }