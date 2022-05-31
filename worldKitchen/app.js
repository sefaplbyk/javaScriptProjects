const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Kebap",
    category: "Turkey",
    price: 4.99,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/1280px-Lula_kebab_2.jpg",
    desc: `Kebab is the name given to meat dishes that are cooked on the barbecue in oak charcoal or wood oven, and also cooked in ovens today. It is cooked directly over the fire or in a bowl without water.`,
  },
  {
    id: 11,
    title: "Hünkâr beğendi",
    category: "Turkey",
    price: 10.99,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/H%C3%BCnkarbe%C4%9Fendi.jpg/220px-H%C3%BCnkarbe%C4%9Fendi.jpg",
    desc: `Hünkarbegendi, or just liked, is a dish of Ottoman cuisine. It's made with smoked and spiced eggplant, grilled, then pureed and mixed with milk, melted butter, and roasted flour. Lamb meat is placed on the mixture and served.`,
  },
];
//****** */
// Tüm buttonların oluşturulduğu id ve class eklenmesi
let allButtons = `
<button id="All" class="btn btn-outline-dark btn-item">All</button>
<button id="Korea" class="btn btn-outline-dark btn-item">Korea</button>
<button id="Japan" class="btn btn-outline-dark btn-item">Japan</button>
<button id="China" class="btn btn-outline-dark btn-item">China</button>
<button id="Turkey" class="btn btn-outline-dark btn-item">Turkey</button>
`;
//Oluşturulan butonların içeriğe eklenmesi
document.querySelector(".btn-container").innerHTML = allButtons;
//İçerik alanının seçilmesi
let section = document.querySelector(".section-center");
//sayfa yüklenince allItem fonksiyonunu çalıştırıyoruz
document.addEventListener("DOMContentLoaded", allItem);
//idsi All olan elemente tıklandığında allItem fonksiyonu çalışıyor
document.getElementById("All").addEventListener("click", allItem);

//idsi Korea olan elemente tıklandığında çalışacak fonksiyon
document.getElementById("Korea").addEventListener("click", () => {
  //İlk başta içeriği temizliyoruz
  section.innerHTML = "";
  //forEach ile tüm menüyü dolaşıyoruz ve categorysi Korea olan itemleri aliyoruz
  menu.forEach((item) => {
    if (item.category === "Korea") {
      //Categorysi Korea olan itemleri section'un innerHTML ine product(item) fonksiyonu ile ekliyoruz
      section.innerHTML += product(item);
    }
  });
});
document.getElementById("Turkey").addEventListener("click", () => {
  section.innerHTML = "";
  menu.forEach((item) => {
    if (item.category === "Turkey") {
      section.innerHTML += product(item);
    }
  });
});
document.getElementById("Japan").addEventListener("click", () => {
  section.innerHTML = "";
  menu.forEach((item) => {
    if (item.category === "Japan") {
      section.innerHTML += product(item);
    }
  });
});
document.getElementById("China").addEventListener("click", () => {
  section.innerHTML = "";
  menu.forEach((item) => {
    if (item.category === "China") {
      section.innerHTML += product(item);
    }
  });
});
//İçeriklerin oluşturulacağı fonksiyon
const product = (food) => {
  let html = `
  <div class="menu-items col-lg-6 col-sm-12">
  <img src="${food.img}" alt="${food.title}" class="photo">
  <div class="menu-info">
  <div class="menu-title">
  <h4>${food.title}</h4>
  <h4 class="price">${food.price}$</h4>
  </div>
  <div class="menu-text">
  ${food.desc}
  </div>
  </div>
  </div> 
  `;
  return html;
};
//tüm itemlerin sectiona eklendiği fonksiyon
function allItem() {
  menu.forEach((item) => {
    section.innerHTML += product(item);
  });
}
