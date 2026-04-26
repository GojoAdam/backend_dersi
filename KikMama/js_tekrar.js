// let, const ve var

let ad = "memet"; // stirng
const yil = 2000; // number
let bilgi = true // bool

let isimler = ["baran","nisa","goktug"] //array

let ogrenci = {
    ad : "ahmet" ,
    okul : "çakır"
} // object

// koşullar
if (2026-yil < 22){
    console.log("ogrenci kart")
} else if (2026-yil > 65){
    console.log("65 yaş üstü kart")
} else{
    console.log("tam kart")
}

// döngüler

for (let i = 0;i<isimler.length;i++){
    console.log(isimler[i])
}

let sayac = 0
while(true){
    if (sayac >= isimler.length ){
        break
    }
    console.log(isimler[sayac])

    sayac++
}

do {
    console.log("sayac degeri : ",sayac, "bir kere çalıştırır her zaman")
} while (sayac > 3);
//

// foreach

for (isim of isimler){
    console.log("isim : ",isim)
}

// Fonksiyonlar 

function veri_uret (a, b){
    return a+b 
};
let sonuc = veri_uret(10,15)
console.log("sonuc",sonuc)

function param_donussuz(a){
    console.log("donusssuz");
};
param_donussuz(15);

//ES6
const carp = (a,b) => {
    return a * b
};
console.log("carp(5)", carp(5,4))

// class - oop

class Kullanici{

    constructor (kullanici_adi,sifre) {
        this.kullanici_adi = kullanici_adi
        this.sifre = sifre
    }
    bilgi_yaz(){
        console.log("ad : ",this.kullanici_adi)
        console.log("şifre : ",this.sifre)
    }
    static bilgi(){
        console.log("this olmadan")
    }
    static birlestirir(isim,soyisim){
        
    }
}
Kullanici.bilgi()
const kullanici1 = new Kullanici("goktug","göktuğ");
kullanici1.bilgi_yaz()
