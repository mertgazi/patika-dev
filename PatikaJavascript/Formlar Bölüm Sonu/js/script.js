const testformDom = document.querySelector("#testform");
const outputDom = document.querySelector("#formOutput");
const formerrorDom = document.querySelector("#formerror")

//Submit sayfa yenileme devre dışı bırakıyoruz ve additem fonksiyonumuzun parametrelerini input value'lerine eşitleyip , submit sonrasında çalışması için fonksiyonu ekliyoruz.
testformDom.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameDom = document.querySelector("#username");  //username input
    const notinfoDom = document.querySelector("#notinfo");    // not input

    if (usernameDom.value == "" || notinfoDom.value == "") {
        let alertP = document.createElement("p");
        alertP.innerHTML = `Kullanıcı İsmi ve Not Bilgisi boş bırakılamaz`
        alertP.classList.add("formErr")
        formerrorDom.appendChild(alertP)

        outputDom.firstChild.innerHTML = ""  //Error hatası varken output çıktısı görünmemesi için yazıldı

        // Hata mesajının ekrana birden fazla gelmemesi için yazıldı.
        if (formerrorDom.childElementCount >= 2) {
            formerrorDom.lastChild.remove()
        };

    } else {
        additem(usernameDom.value, notinfoDom.value)
        usernameDom.value = "";
        notinfoDom.value = "";
        formerrorDom.innerHTML = "";  // inputların içerisi dolu gönderilirse error hatasını gizledik.

        //İnput içeriklerinin çıktılarının istiflenmemesi için her diğer işlemde ilk işlemi siliyoruz.
        if (outputDom.children.length >= 1) {
            outputDom.firstChild.remove()
        }
    }
})

// Submit yaptığımızda input içerisindekilerin yeni bir li'ye eklenip görünmesi için fonksiyon.
function additem(user, note) {
    let newul = document.createElement("ul");
    let newli = document.createElement("li");
    newli.innerHTML = `Kullanıcı adınız: ${user} Notunuz : ${note}`
    newul.appendChild(newli)

    newli.setAttribute("class", "domLi")

    outputDom.setAttribute("class", "additemClass")
    outputDom.appendChild(newul)
}

// İnput value sıfırlama 
document.querySelector("#btnreset").addEventListener("click", () => {
    document.querySelector("#username").innerHTML = "";  //username input
    document.querySelector("#notinfo").innerHTML = "";    // not input
})

