let yas : Number = 10;
let isim : string = "backend dersi"

// ts dosyalarını çalıştırmak içim
// npx ts-node /KikMama/DOSYANIN_İSMİ.ts

let hazir_mi : boolean = true;

// Interface -> arayüzler
interface Iogrenci {
    isim:string;
    soyisim:string;
    yas:number;
    mezun:boolean;
}

let ogrenci : Iogrenci = {
    isim : "memet",
    soyisim : "ayna",
    yas : 16,
    mezun: false ,
}

class Araba {
    public marka : string
    public hiz : number

    constructor(marka:string,hiz:number){
        this.marka = marka,
        this.hiz = hiz
    }
    vites_arttir(vites_numarasi:number){
        const artacak_hiz:number = vites_numarasi * 15;
        this.hiz = this.hiz + artacak_hiz
        return this.hiz;

    }

}

const arabai : Araba = new Araba("BMW", 10);
let son_hiz : number = arabai.vites_arttir(4);
console.log("son hı< : ",son_hiz);
