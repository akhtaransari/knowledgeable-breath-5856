
// Write all necessery JS here 
    // -------------------------------------------------------------
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let arr_data = []
    let span = document.getElementById("total_items")
    let total_count  = document.getElementById("total_count")
    // -------------------------------------------------------------
    fetch_data();
    // -------------------------------------------------------------
    function filter_data(params) {
      let high = document.getElementById("high")
      let low = document.getElementById("low")
      let pop = document.getElementById("pop")
      let best = document.getElementById("best")
      let new_p = document.getElementById("new")
      let form  = document.querySelector("form")

      
      
      low.addEventListener("click",()=>{
        let high_data = params.sort((a,b)=>{return a.price - b.price})
        console.log(params)
        dom_data(high_data)
      })

      high.addEventListener("click",()=>{
        let low_data = params.sort((a,b)=>{return b.price - a.price})
        dom_data(low_data)
      })

      pop.addEventListener("click",()=>{
        let pop_data = params.filter((el)=>{ return el.brand === "Apple"})
       
        dom_data(pop_data)
        
      })

      best.addEventListener("click",()=>{
        let best_data = params.filter((el)=>{ return el.id%2===0 })
        dom_data(best_data)
      })

      new_p.addEventListener("click",()=>{
        let new_data = params.filter((el)=>{ return el.id%2===1 })
        dom_data(new_data)
      })

      form.addEventListener("submit",(e)=>{
        e.preventDefault()

        let searched  = params.filter(ele =>{
          return ele.brand.toLowerCase().includes(form.search.value.toLowerCase())
        })
        dom_data(searched)
      })

     
    }
    // -------------------------------------------------------------
    async function fetch_data() {
      try {
      let req = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      let data = await req.json();
      arr_data = data.data
      filter_data(arr_data)
      dom_data(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    // -------------------------------------------------------------
    function dom_data(params) {
      let cont = document.getElementById("product-container")
      cont.innerHTML=""
      params.forEach(element => {
        let flag = true;
        let div = document.createElement("div")
        let img = document.createElement("img")
        let brand = document.createElement("h2")
        let price = document.createElement("h3")
        let details = document.createElement("p")
        let category = document.createElement("p")
        let btn = document.createElement("button")
        

        img.setAttribute('src',element.img)
        brand.innerText = element.brand
        price.innerText = element.price
        details.innerText = element.details
        category.innerText = element.category
        btn.innerText = "Add To Cart"
        
        btn.addEventListener("click",()=>{
          
          if (flag === true){
            alert("Product Added To Cart")
            btn.innerText = "Added"
            btn.style.backgroundColor = "green"
            flag = false;
            element.quantity = 1
            arr.push(element)
          }else if (flag === false){
            alert("Product Already in Cart")
          }
          
          localStorage.setItem("cart",JSON.stringify(arr))
        })
        span.innerText = params.length
        // total_count.innerText = 12
        div.append(img,brand,price,details,category,btn)
        cont.append(div)
      });
    }