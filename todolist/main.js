//Dom Elementlerini seçiyoruz
let inputDOM = document.querySelector("#task");
let submitDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let listdivDOM = document.querySelector(".list");
let clearTodo = document.querySelector(".btn-danger");

//Tüm event listenersleri çalıştıran fonksiyon
eventListeners();

function eventListeners() {
  //Tüm Event Listenerler Burada
  submitDOM.addEventListener("click", addTodo);
  listDOM.addEventListener("click", deleteTodoTOUI);
  listdivDOM.addEventListener("click", okTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  document.addEventListener("DOMContentLoaded", cx);
  clearTodo.addEventListener("click", clearAllTodo);
}
//Tüm todoları temizleyen buttonun display özelliği
function cx(e) {
  //listede eleman yoksa display none
  if (listDOM.firstElementChild === null) {
    clearTodo.style.display = "none";
  } else {
    //listede eleman varsa veya eklenirse display block
    clearTodo.style.display = "block";
  }

  e.preventDefault(); //Sayfa yenilenmesini engelleyen fonksiyon
}
//Clear all todo function
function clearAllTodo(e) {
  //Kullanıcıya tüm todoları silmek isteyip istemediğini sormak
  if (confirm("Tümünü Silmek İstediğinizden Emin Misiniz ?")) {
    //while döngüsü ile ilk eleman kalmayana kadar listDOM içindeki verileri siliyoruz
    while (listDOM.firstElementChild != null) {
      listDOM.removeChild(listDOM.firstElementChild);
    }
    //Tüm todoları localStorage'den siliyoruz
    localStorage.removeItem("todos");
  }

  cx(e); //Tüm todoları silme butonunu güncelliyoruz
}
// checked todo function
function okTodo(e) {
  //tıklanılan liste elemanına checked classı veriyoruz
  if (e.target.className === "liItem") {
    e.target.className = "checked";
    //tıklanılan liste elemanında checked classı varsa onu geri aliyoruz
  } else if (e.target.className === "checked") {
    e.target.className = "liItem";
  }
}
//deleteTodoTOUI function
function deleteTodoTOUI(e) {
  //silme iconuna tıklanıp tıklanmadığını kontrol ediyoruz
  if (e.target.className === "fa fa-remove close") {
    //silme iconuna tıklandıysa list itemi a değişkenine atiyoruz
    let a = e.target.parentElement.parentElement;
    //bu veriyi Storage'den de silmek için ilgili fonksiyona yolluyoruz
    deleteTodoFromStorage(a.innerText);

    a.remove(); //veriyi siliyoruz
  }

  cx(e); //Tüm todoları silme butonunu güncelliyoruz
}
//deleteTodoFromStorage function
function deleteTodoFromStorage(deletetodo) {
  //localstorageden değerleri todos ismiyle array olarak aliyoruz 
  let todos = getTodoFromStorage();
  //bu aldığımız arrayi tek tek dolaşıyoruz foreach ile
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {//silmek istenilen değeri arrayda yakalıyoruz
      todos.splice(index, 1); // o indexi siler
    }
  });
  //Silme işleminden sonra elimizde kalan arrayi tekrar localstorageye set ediyoruz
  localStorage.setItem("todos", JSON.stringify(todos));
}
//loadAllTodosToUI function
function loadAllTodosToUI() {
  //Silme işleminde olduğu gibi storagedeki bilgileri todos isimli değişkene aktarıyoruz
  let todos = getTodoFromStorage();
  //todos üzerinde geziniyoruz ve tüm elemanları addTodoToUI fonksiyonuna gönderiyoruz
  todos.forEach((todo) => {
    addTodoTOUI(todo);
  });
}
//addTodo function
function addTodo(e) {
  const newTodo = inputDOM.value.trim(); //inputun başındaki ve sonundaki boşlukları kaldırma fonksiyonu
  if (newTodo === "") {
    //inputun boş mu dolu mu olduğunu kontrol ediyoruz
    $(".error").toast("show"); //Hata Bildirimi
    inputDOM.value = "";
  } else {
    addTodoTOUI(newTodo); //Todoları Ara Yüze Ekliyoruz
    addTodoTOStorage(newTodo); //Todoları Storageye ekliyoruz
    $(".success").toast("show"); //Başarılı Bildirimi
  }
  cx(e); //Tüm todoları silme butonunu güncelliyoruz
  e.preventDefault(); //işlemden sonra sayfa yenilenmeden işleme devam edebilmek için kullanıyoruz bu fonksiyonu
}
//Todoları Storageden almak
function getTodoFromStorage() {
  // storageden todoları al
  let todos; //todos isimli değişken oluştur
  //localstoragede todos isimli birşey varmı diye bak eğer yoksa
  if (localStorage.getItem("todos") === null) {
    //todos isimli array oluştur
    todos = [];
  } else {
    //varsa todos isimli değişkene json halinde o verileri gönder
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  //bu fonksiyon çağırıldığında todosu dön
  return todos;
}
// Todoları Storageye yollamak
function addTodoTOStorage(newTodo) {
  //storagedeki veriyi çağırıyoruz ve todos isimli değişkene aktarıyoruz
  let todos = getTodoFromStorage();
  // todos isimli arraya push fonksiyonu ile elemanı ekliyoruz
  todos.push(newTodo);
  //güncellenmiş olan todos isimli arrayı string halde tekrar locak storageye gönderiyoruz
  localStorage.setItem("todos", JSON.stringify(todos));
}
//Todoları Ekrana Eklemek
function addTodoTOUI(newTodo) {
  //List item oluşturma
  const listItem = document.createElement("li");
  //list iteme class verilen yer
  listItem.className = "liItem";
  //silme işlemi için gerekli icon
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove close'></i>";
  //list iteme yeni bir text ekliyoruz
  listItem.appendChild(document.createTextNode(newTodo));
  //list iteme yukarıda oluşturduğumuz iconu ekliyoruz
  listItem.appendChild(link);
  //list itemi listeye ekliyoruz
  listDOM.appendChild(listItem);
  //ekleme işleminden sonra inputu temizliyoruz
  inputDOM.value = "";
}
