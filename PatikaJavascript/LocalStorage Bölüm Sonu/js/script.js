let divresult = document.querySelector("#divresult");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let counterreset = document.querySelector("#reset");

//"counter" isimli localstoragemizi get ile çağırıp counter'a atadık.Artık storagede olan son veriyi çekeceğiz.
let counter = localStorage.getItem("counter");
divresult.innerHTML = counter;

increase.addEventListener("click",inc_dec)
decrease.addEventListener("click",inc_dec)
counterreset.addEventListener("click",counterrest)

// Sayaç arttırma - azaltma fonksiyonu
function inc_dec(){
    if(this.id == "increase"){
        divresult.innerHTML = ++counter        
    }else if(this.id == "decrease"){
        divresult.innerHTML = --counter
    }
    localStorage.setItem("counter",counter)  // localstorage oluşturup sayaç'ı son kaldığı yerden devam ettireceğiz.
}

// Sayaç sıfırlama fonksiyonu
function counterrest(){
localStorage.removeItem("counter")
counter = 0
divresult.innerHTML = counter;
}