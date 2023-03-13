let taskInput = document.querySelector("#task");
let ulList = document.querySelector("#list");
let spanBtn = document.querySelector("#liveToastBtn");

// Sayfadaki tüm li elementlerine button ekleyelim. (elementi silme butonu) 
document.querySelectorAll("#list > li").forEach((element) => {
  let newBtn = document.createElement("button");
  newBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
  newBtn.classList.add("removeBtn")
  element.appendChild(newBtn);
  newBtn.addEventListener("click", removeElement);
});

// Elementleri Silme Fonksiyonu
function removeElement() {
  this.parentElement.remove(); // buttona tıkladığımzda bir üst elementi yani li elementini silecek.
}

// Yapıldı işaretlenmesi için tüm li'lere toggle ekleyelim.
document.querySelectorAll("#list > li").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("done")
  })
})

// Yeni element oluşturma ve listenin sonuna ekleme fonksiyonu
function newElement() {
  if (taskInput.value.trim() === "") {
    $('.error').toast("show") // Bootstrap toast hata mesajı verilmesi için eklendi
  } else {
    let newLi = document.createElement("li");
    newLi.innerHTML = taskInput.value;
    ulList.appendChild(newLi);

    //Elementleri oluşturduktan sonra silme butonunu tekrar burada eklemeliyiz.Yukarıda yapılan yöntem sayfada hazır halde bulunan elementlere button'u ekleyecek, ! Sonradan eklenenleri DOM ilk etapta görmeyecek ve eklemeyecektir.
    let newBtn = document.createElement("button");
    newBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    newBtn.classList.add("removeBtn")
    newLi.appendChild(newBtn);
    newBtn.addEventListener("click", removeElement);
    newBtn.addEventListener("click", removeStorage); // storageden sayfa yenilemeden eleman silmek için)

    //Yapıldı işaretlenmesini yeni oluşturulacak elementlerede ekleyelim.
    newLi.addEventListener("click", () => {
      newLi.classList.toggle("done")
    })
    $('.success').toast("show") // Bootstrap toast başarılı mesajı verilmesi için eklendi

    addStorage() // yeni elementi localstorageye kaydetmek için fonksiyonu çağırıyoruz.

  }
  taskInput.value = ""; // ekleme yaptıktan sonra input içerisini boşaltıyoruz. 
}

// İnput içerisindeki bilgiyi ENTER tuşuna basarak ekleyelim.
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    spanBtn.click()
  }
})

// Ekleme yaptıktan sonra tekrar input'a focuslanma ekleyelim.
spanBtn.addEventListener("click", () => {
  taskInput.focus()
})

/* ----------------BU SATIRDAN SONRAKİ AŞAMA LOCALSTORAGE AŞAMASIDIR*----------------------*/

let localArray; // localStorage'de input değerlerimizin tutulacağı dizimiz.

// Daha önce localStorage üzerinde "livalue" anahtarına sahip bir öğe oluşturulduysa, bu öğeden verileri alarak localArray değişkenini güncelleyeceğiz. Eğer böyle bir öğe yoksa, localArray değişkeni boş bir dizi olarak başlatıp içerisinde push yapabileceğiz.
if (localStorage.getItem("livalue")) {
  localArray = JSON.parse(localStorage.getItem("livalue"))
} else {
  localArray = [];
}

// localStorage'ye input değerlerimizi ekleme fonksiyonu.
function addStorage() {
  localArray.push(taskInput.value);
  localStorage.setItem("livalue", JSON.stringify(localArray))
}

// Sayfa tekrar yüklendiğinde localStorage arrayimizde(localArray) olan verileri yeni bir li olarak sayfamıza ekleyelim.
localArray.forEach((element) => {
  let newLi = document.createElement("li")
  newLi.innerHTML = element;
  ulList.appendChild(newLi)

  // silme butonunuda ekleyelim.
  let newBtn = document.createElement("button");
  newBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
  newBtn.classList.add("removeBtn")
  newLi.appendChild(newBtn);
  newBtn.addEventListener("click", removeElement); // listeden eleman silmek için fonksiyon tetiklemesi
  newBtn.addEventListener("click", removeStorage); // storageden eleman silmek için(sayfa tekrar yüklendiğinde)

  // yapıldı işaretlemesinide ekleyelim
  newLi.addEventListener("click", () => {
    newLi.classList.toggle("done")
  })
})

// Elemanları listeden Sildiğimizde localStoragedende silme fonksiyonu.
function removeStorage() {
let indexNo= localArray.indexOf(this.parentElement.textContent) // tıkladığımız li'nin index'ini bulduk.
localArray.splice(indexNo,1) // indexdeğerini silmek için splice metodunu kullandık.
localStorage.setItem("livalue",JSON.stringify(localArray))
}


