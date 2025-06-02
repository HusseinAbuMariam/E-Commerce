let shopBtn=document.querySelector("#shop-btn")
let buyBtn1=document.querySelector("#Buy-btn1")
let buyBtn2=document.querySelector("#Buy-btn2")
let buyBtn3=document.querySelector("#Buy-btn3")
shopBtn.addEventListener("click",function(){
    window.location.href="product.html"
})
buyBtn1.addEventListener("click",function(){
    window.location.href="product.html"
})
buyBtn2.addEventListener("click",function(){
    window.location.href="product.html"
})

buyBtn3.addEventListener("click",function(){
    window.location.href="product.html"
})



window.addEventListener("load", function () {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1000); 
  });