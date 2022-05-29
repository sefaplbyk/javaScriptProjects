//Birinci Yapılış Şekli
const span =document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");



decrease.addEventListener("click",function(){
     
    span.textContent -- ;   
})
reset.addEventListener("click",function(){
    span.textContent = 0;
})
increase.addEventListener("click",function(){
     
    span.textContent = parseInt(span.textContent) +1;
})

// İkinci Yapılış Şekli
//set initial count
// let count = 0 ;

// //select value and button

// const value=document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const styles= e.currentTarget.classList
//         if(styles.contains("decrease")){
//             count--;
//         }
//         else if(styles.contains("increase")){
//             count++;
//         }
//         else{
//             count = 0;
//         }
//         if(count >0){
//             value.style.color="green"
//         }
//         else if(count<0){
//             value.style.color="red "
//         }
//         else if(count===0){
//             value.style.color="#222"
            
//         }
//         value.textContent = count
//     })
// });
