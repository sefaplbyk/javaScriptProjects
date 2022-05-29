let name = prompt("Adınızı Giriniz")
name = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
document.getElementById("myName").innerText = name

function showTime(){

    const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  
   document.getElementById("myClock").innerText=h+":"+m+":"+s
   setTimeout(showTime, 1000)
}
