//////////////////////5 ta construktor funksiyaga oid misol yozish/////////////////////////
// 1

// function User(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
// }

// let shohijahon = new User("shohijahon", 16, 55);

// 2
// function  User(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
// }

// let jordi = new User("jordi", 30, 60)

// jordi.nat = "Ciudad Real, Castilla-La"

// 3
// function User(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
// }

// let david = new User("david", 54, 100);

// 4
// function User (name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
// }

// let Alex = new User("Alex", 20, 60);


// 5
// function User(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
// }

// let Tom = new User("Tom", 12, 25);

// Tom.phone = "+998911146476"


////////////////////5 ta class ga oid misol yozish/////////////////////////////////

// 1

// class User{
//    constructor  (name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }

// }

// let shohijahon = new User("shohijahon", 16, 55);

// 2
// class  User{
//    constructor (name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }

// }

// let jordi = new User("jordi", 30, 60)

// jordi.nat = "Ciudad Real, Castilla-La"

// 3
// class User{
//    constructor (name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }
// }

// let david = new User("david", 54, 100);


// 4
// class User {
//    constructor (name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }

// }

// let Alex = new User("Alex", 20, 60);


// 5
// class User{
//    constructor (name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }
    
// }
// let Tom = new User("Tom", 12, 25);

// Tom.phone = "+998911146476"




//////////////////////Massiv va obyektlar////////////////////////////

// 1

// const oquvchilar = [
//     { ism: "Ali", yosh: 17 },
//     { ism: "O'ktam", yosh: 18 },
//     { ism: "Sardor", yosh: 19 },
// ];
// let values = Object.values(oquvchilar);
// console.log(values);

// 2
// const mahsulotlar = [
//     { nom: "Olma", narx: 100 },
//     { nom: "Nok", narx: 150 },
//     { nom: "Banan", narx: 200 },
// ];

// function maxsulot(mahsulotlar){
//     let res =mahsulotlar.map(function(v){
//         return v.narx + (v.narx * 0.2)
//     })
//     return res
// }
// console.log(maxsulot(mahsulotlar));

// 3
// const oquvchilar = [
//     { ism: "Dilorom", yosh: 20 },
//     { ism: "Shahrizoda", yosh: 17 },
//     { ism: "Akbar", yosh: 19 }
// ];
// function  oquv(oquvchilar) {
//   let user = oquvchilar.filter(function (v) {
//     return v.yosh >= 18
//   });

//   return user
// }
// console.log(oquv(oquvchilar));

// 4
// const kitoblar = [
//     { nom: "Kitob A", muallif: "Said Ahmad" },
//     { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//     { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
// ];
// function  kitb(kitoblar) {
//   let user = kitoblar.filter(function (v) {
//     return v.muallif = "Said Ahmad"
//   });

//   return user
// }
// console.log(kitb(kitoblar));

// 5
// const xodimlar = [
//     { ism: "Rashid", ishHaqi: 3000 },
//     { ism: "Dilshod", ishHaqi: 2500 },
//     { ism: "Farhod", ishHaqi: 4000 }
// ];

// function xodm(xodimlar){
//     let res =xodimlar.map(function(v){
//         return v.ishHaqi + (v.ishHaqi * 0.1)
//     })
//     return res
// }
// console.log(xodm(xodimlar));

// 6
// const oquvchilar = [
//     { ism: "Jasur", yosh: 21 },
//     { ism: "Sardorbek", yosh: 22 },
//     { ism: "Azizbek", yosh: 20 }
// ];

// function  oquv(oquvchilar) {
//   let user = oquvchilar.map(function (v) {
//     return { ...v, ism: "Mr. " + v.ism };
// });

//   return user
// }
// console.log(oquv(oquvchilar));

// 7
// const avtomobillar = [
//     { nom: "Tesla", tur: "elektr" },
//     { nom: "Toyota", tur: "benzin" },
//     { nom: "Nissan Leaf", tur: "elektr" }
// ];

// function  avto(avtomobillar) {
//   let user = avtomobillar.filter(function (v) {
//     return v.tur == "elektr"
//   });

//   return user
// }
// console.log(avto(avtomobillar));

// 8
// const foydalanuvchilar = [
//     { ism: "Aziz", email: "aziz@example.com" },
//     { ism: "Nodir", email: "nodir@example.com" },
//     { ism: "Malika", email: "malika@example.com" }
// ];

// function foydalanuvchi(foydalanuvchilar) {
//     return foydalanuvchilar.map(v => {
//         return {ism: v.ism,email: v.email};
//     });
// }

// console.log(foydalanuvchi(foydalanuvchilar));

// 9
// const mahsulotlar = [
//     { nom: "Televizor", narx: 500 },
//     { nom: "Konditsioner", narx: 700 },
//     { nom: "Butler", narx: 300 }
// ];

// function Qiymat(mahsulotlar) {
//     let maxnom = mahsulotlar[0];

//     mahsulotlar.forEach(function (mahsulot) {
//         if (mahsulot.narx > maxnom.narx) {
//             maxnom = mahsulot;
//         }
//     });

//     return maxnom;
// }

// console.log(Qiymat(mahsulotlar));

// 10
// const oquvchilar = [
//     { ism: "Zarina", ball: 85 },
//     { ism: "Doston", ball: 90 },
//     { ism: "Gulbahor", ball: 95 }
// ];

// function  bal(oquvchilar) {
//   let user = oquvchilar.filter(function (v) {
//     return v.ball = 100
//   });

//   return user
// }
// console.log(bal(oquvchilar));

//////////////////////String metodiga oid masalalar////////////////////////////

// 1
// let  str = "MERCEDES"
// let res = str.toLowerCase();
// console.log(res);

// 2
// let  str = "MERCEDES"
// let count = 0;
// for(let i=0; i < str.length; i++){
//     if(typeof str == 'string'){
//         count++
//     }
// }
// console.log(count);

// 3
// let arr = "Hello mercedes !"
// function soz(arr){
//     let hello = (arr.slice(0,5) === 'Hello')
//     let undov =(arr.slice(-1) === '!')
//     return [hello , undov]
// }
// console.log(soz(arr));

// 4
// let str = "UZBEKISTAN hello"
// function minus(arg){
//         return arg.length - 10

// }
// console.log(minus(str));

// 5
// let str = "oquvchilar"
// let str1 = ""
// function soz(arg){
//     for(let i=0; i < arg.length; i++){
//         if (arg[i] == "a") {
//            str1 += "o";
//         }else{
//             str1 += arg[i];
//         }
//     }
//     return str1
// }
// console.log(soz(str));

// 6
// function soz(str) {
//     if (str.length > 5) {
//         console.log("5-indeksdagi belgi: " + str.charAt(5));
//     } else {
//         console.log("Berilgan satr uzunligi yetarli emas.");
//     }
// }

// let str = "JavaScript";
// soz(str);

// 7
// function nomi(v) {
//     if (v.includes("JavaScript")) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// let str  = "JavaScript, hello";
// nomi(str);
