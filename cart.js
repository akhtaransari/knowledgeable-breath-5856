let arr = JSON.parse(localStorage.getItem("cart")) || []
let total = document.getElementById("items_total")



    dom_data(arr)
    function dom_data(params) {
      let cart_value = 0;
      
      

      let cont = document.getElementById("cart-container")
      cont.innerHTML=""
      params.forEach((element,index) => {
        let count = 1;
        let div = document.createElement("div")
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let img = document.createElement("img")
        let brand = document.createElement("h2")
        let price = document.createElement("h3")
        let details = document.createElement("p")
        let category = document.createElement("p")
        let btn_p = document.createElement("button")
        let quantity = document.createElement("span")
        let btn_m = document.createElement("button")
        let remove = document.createElement("button")

        remove.style.backgroundColor = "teal"
        remove.style.color= "white"

        
        div.setAttribute("id","card")
        remove.innerText = "Remove"
        btn_p.innerText = "+"
        btn_m.innerText = "-"
        quantity.innerText  = element.quantity

        btn_p.addEventListener("click",()=>{
          element.quantity++
          localStorage.setItem("cart",JSON.stringify(params))
          dom_data(params)
        })

        btn_m.addEventListener("click",()=>{
          if (element.quantity > 1)
          element.quantity--
          localStorage.setItem("cart",JSON.stringify(params))
          dom_data(params)
        })
        


        cart_value+= Number(element.price)*Number(element.quantity)
        img.setAttribute('src',element.img)
        brand.innerText = element.brand
        price.innerText = element.price+" Rupees/-"
        details.innerText = element.details
        category.innerText = element.category

        remove.addEventListener("click",()=>{
           params = params.filter(ele=>{return element.id !== ele.id})
          localStorage.setItem("cart",JSON.stringify(params))
          dom_data(params)
        })
        div4.append(brand,details)
        div1.append(img,div4)
        div2.append(btn_m,quantity,btn_p,remove)
        div3.append(price)
        div.append(div1,div2,div3)
        // div.append(details,category,btn_p,quantity,btn_m,remove)
        cont.append(div)
      });

      let span = document.querySelectorAll("#total")
      span[0].innerText = cart_value+` Rupees/-`
      span[1].innerText = cart_value+` Rupees/-`
      total.innerText = params.length
    }

    let place_button = document.getElementById("place_button")
    let checkout = document.getElementById("checkout")
    place_button.addEventListener("click",()=>{
      checkout.style.visibility = "visible"
    })

    checkout.addEventListener("submit",(e)=>{
      checkout.innerHTML = ""
      checkout.innerText = "Your Order has been placed Succesfully !"
      setTimeout(() => {
      checkout.style.visibility = "hidden"  
      }, 3000);
      
    })

