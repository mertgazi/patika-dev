const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

/* İlk olarak menu nesnemizin category özelliğinde bulunan öğeleri alalım. Buna göre buttonlar oluşturacağız.
Fakat bu öğelerden aynı isimde birden fazla olanlar olabilir bu yüzden aynı isimdekileri sadece 1 kere almak gerekiyor bunun içinde set kullanabiliriz yada reduce metodu kullanabiliriz */

let uniqCategory = menu.reduce((acc, element) => {
  if (!acc.includes(element.category)) {
    acc.push(element.category)
  }
  return acc
}, ["Hepsi"])

// category özelliklerini aldığımıza göre bu kategori isimlerini kulllanarak sayfamıza yeni buttonlar oluşturalım.

uniqCategory.map((element) => {
  let newBtn = document.createElement("button");
  newBtn.innerHTML = element
  newBtn.classList.add("btn-item")
  btnContainer.appendChild(newBtn)
})

// Ürünüleri , HTML sayfasına ekleme fonksiyonu yapalım. Bu fonksiyon parametre olarak ise filter metodu kullanacağımız zaman  atadığımız filter değişkenini alsın.Böylece her filtreleme yapıldığında kategori ekrana yazdırılacak.

let showMenu = (menuItem) => {
  menuItem.forEach((element) => {
    section.innerHTML += `
    <div class="menu-items col-6">
      <img class="photo" src="${element.img}" >
        <div class="menu-info" >
           <div class="menu-title"> <h4>${element.title}</h4> <h4>${element.price} </div>
           <div class="menu-text" >${element.desc}</div>     
        </div>    
    </div>
    `
  })
}

// Filtreleme yaptığımızda kategorilerde gezerken bir önceki kategori içeriği silinmeden üzerine ilave ederek görünüyor bu yüzden bi sayfa temizleme fonksiyonu yapalım ki istiflenme olmasın.
let clearPage = () => {
  section.innerHTML = ""
}

// Filtreleme işlemini yapalım.Öncelikle sayfadaki buttonları seçip bu buttonlara tıkladığımızda bu botton içeriğinde yazan text(string) ile menu nesnesindeki kategory özelliğinde kayıtlı text(string)'i karşılaştırıp aynı ise filtreleyeceğiz.
let btnAll = document.querySelectorAll(".btn-container > button")

btnAll.forEach((element) => {
  element.addEventListener("click", () => {
    let menuFilter = menu.filter((item) => {
      if (element.innerHTML === item.category) {
        return item.category
      }
    })
    clearPage()                   // Önce sayfa temizlenecek
    showMenu(menuFilter)          // Daha sonra ilgili buttonun filtrelediği menu.category özellikleri gelecek.

    if (element.innerHTML === "Hepsi") {  // "Hepsi" butonuna tıkladığımızda menüyü komple çağıralım.
      return showMenu(menu)
    }
  })
})


showMenu(menu) // Sayfa ilk açıldığında tüm menüyü çağıralım.


/*BURADAKİ KODLARIN PROJE İLE ALAKASI YOKTUR RESPONSİVE TASARIM İÇİN EKSTRA YAZILDI.*/
let toggleMenu = document.querySelector("#toggle-menu");
let btnCon = document.querySelector(".btn-container");
toggleMenu.addEventListener("click",()=>{
 
  btnCon.classList.toggle("toggleContainer")
   
})