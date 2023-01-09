const togle = document.getElementById("togle");
const circle = document.getElementById("circle");
const monthlyPrice = document.getElementsByClassName("monthlyPrice")
const yearPrice = document.getElementsByClassName("yearPrice")


console.log(monthlyPrice,yearPrice);

    const changePackeg = ()=>{
        if(circle.classList.contains("monthly")){
            circle.classList.remove("monthly");
            circle.classList.add("annually");
          for (const ele of monthlyPrice) {
            ele.style.display = "none";
          }
            // monthlyPrice.style.display = "none";

            for (const ele of yearPrice) {
                ele.style.display = "block";
            }
            // yearPrice.stylel.display = "block";
        }else{
            circle.classList.remove("annually");
            circle.classList.add("monthly");
            for (const ele of monthlyPrice) {
                ele.style.display = "block";
              }
            // monthlyPrice.style.display = "block";
            for (const ele of yearPrice) {
                ele.style.display = "none";
            }
            // yearPrice.stylel.display = "none";
        }
    }

    changePackeg();

    togle.addEventListener("click",changePackeg);