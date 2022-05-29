const colors = ["green","red","blue","white","black"]
const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    //random number oluşturucu 0-2

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}