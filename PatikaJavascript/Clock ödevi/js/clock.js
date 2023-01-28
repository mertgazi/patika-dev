let namespan = document.querySelector("#myName");
let getname = prompt("İsminiz Nedir?");

namespan.innerHTML = getname; // Prompt ile alacağımız veriyi namespan içerisine yazacağız.

let clockdiv = document.querySelector("#myClock");

//Tarih metodu oluşturduk
let getdate = new Date();

// Tarihin yanına gün'de yazmak için getDay() metodu kullandık.
let gün = getdate.getDay();

// Günleri türkçeye çevirdik.
function trgün(){
    switch(gün){
        case 0 :return  clockdiv.innerHTML = "Pazar"
        break;
        case 1 :return clockdiv.innerHTML = "Pazartesi"
        break;
        case 2 :return clockdiv.innerHTML = "Salı"
        break;
        case 3 :return clockdiv.innerHTML = "Çarşamba"
        break;
        case 4 :return clockdiv.innerHTML = "Perşembe"
        break;
        case 5 :return clockdiv.innerHTML = "Cuma"
        break;
        case 6 :return clockdiv.innerHTML = "Cumartesi"
        break;
    }
}

// Tarihi yerel gösterime çevirdik ve türkçe haftanın günlerini oluşturduğumuz fonksiyonuda yanına ekledik, 
function showTime(){    
    clockdiv.innerHTML = `${getdate.toLocaleDateString()} ${trgün()} `;
}

//Sayfa yüklendiğinde tarih gösterme fonksiyonumuzun çalışması için addeventlistener ile olay ekledik.
clockdiv.addEventListener("load",showTime())
