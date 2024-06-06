// let teref = +prompt('Teref: ');
// let star = '';


// for (let i = 0; i < teref; i++) {
//     for (let j = 0; j < teref; j++){
//         star = star + '*';
//     }
//     star += '\n'

// }
// console.log(star);



// let birincideyer =prompt("ilk ededi dacxil edin");
// let ikincideyer =prompt("ikinci ededi daxil edin");
// let emeliyyat =prompt("emeliyyati daxil edin(*-/+)");

// let a = birincideyer;
// let b = ikincideyer;

// function calc(){
//     if(emeliyyat == "*"){
//          alert(a*b);
//     }
//    else if(emeliyyat == "-"){
//         alert(a-b);
//     }
//      else if(emeliyyat == "/"){
//         alert(a/b);
//     }
//    else if(emeliyyat == "+"){
//         alert(a+b);
//     }
//     else{
//         console.error("not")
//     }



// }
// calc()



// function show(){
//     console.log("salam")
// }
// show()



//task 01

// let eded = prompt("3 eded daxil edin").split(" ");
// let maxeded = Math.max(eded[0],eded[1],eded[2]);
// console.log(maxeded)


//task 02


// let eded1 = +prompt("2 eded daxil edin")
// let eded2 = +prompt("2 eded daxil edin")


// function getEded(eded1, eded2) {
//     if (typeof (eded1) == "number" && typeof (eded2) == "number") {
//         return eded1 - eded2;
//     }
//     else {
//         return null;        
//     }
// }

// let result = getEded(45, 32)
// console.log(result);




//Task-03
// capitalizeWords funksiyasını yazın. Funksiya parametr kimi bir neçə sözdən
// ibarət mətn qəbul edir. Funksiya geriyə eyni mətni qaytarmalıdır, lakin
// içindəki hər söz böyük hərflə başlamalıdır.


// let sentence = prompt("Metn daxil edin")

// let capitalizeString = (str) => str[0].toUpperCase() + 
// str.slice(1).toLowerCase();

// let capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');

// console.log(capitalizeWords(sentence));







//Task-04
// Sözü tərsinə çevirən funksiya yaradın

// function getReverse(str) {
//     let string = str.split('');
//     let arrayReverse = string.reverse();
//     let reversedJoin = arrayReverse.join('')
//     return reversedJoin;
// }

// let word = prompt("Soz daxil edin");
// let reversedJoin = getReverse(word);

// console.log(reversedJoin)




//Task-05
// Cümləni tərsinə çevirən funksiya yazin


// function getReverse(str) {
//     let string = str.split('');
//     let arrayReverse = string.reverse();
//     let reversedJoin = arrayReverse.join('')
//     return reversedJoin;
// }

// let sentence = prompt("Metn daxil edin");
// let reversedJoin = getReverse(sentence);

// console.log(reversedJoin)




//Task-06
// Verilmiş cümlədə sözlərin sayını tapın.

// function GetSentence(param) {
//     let string = param.split(" ");
//     let uzunluq = string.length;
//     return uzunluq;
// }

// let sentence = prompt("Cumle daxil edin")
// let uzunluq = GetSentence(sentence);
// console.log(uzunluq)



//Task-07
// Verilmiş cümlədə artıq boşluq simvollarını silin.

// function remov(str) {
//     return str.replace(/\s+/g, '');
// }
// let sentence = prompt("cumle daxil edin");
// let ttn = remov(sentence);
// console.log(ttn)




//Task-08(Usul 01 ; Usul 02)
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam
// adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

//Usul 01
// let FullName = prompt("AD SOYAD:daxil edin").split(" ");
// let a = FullName[0];
// let b = FullName[1];
// let c = (b+"  "+a)
// console.log(c)


//Usul 02
// let name= prompt("Adiniz?")
// let surname = prompt("Soyadiniz?")
// let fullname = (surname+" "+name)
// console.log(fullname)








//task-01

// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları
// massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.


// let eded = prompt("5 eded daxil edin").split("");
// let mineded = Math.min(eded[0],eded[1],eded[2],eded[3],eded[4]);
// console.log(mineded)








//Task-02 

// 4 elementli number Array(massiv) yaradın,[0, 1, 2, 3, 4] ilk
// element-I silin. Sonuna 5 əlavə edin.


// const number = [0,1,2,3,4];
// number.shift();
// number.push(5);
// console.log(number)










//Task-03
// Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal
// massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.













//Task-04

// 5 rəqəmdən ibarət massiv yaradın. Orijinal massivin kopyasini
// çıxarın və yeni massivin bütün elementlərini 5 vahid artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.


// let orijinalmas = [1, 2, 3, 4, 5];

// let copymas = orijinalmas.map(orijinalmas => orijinalmas+5)
// console.log(orijinalmas)
// console.log(copymas)





//Task-05 

// «Kim milyonçu olmaq istəyir» oyununu tərtib edin. Hər sualın
// dörd cavab variantı və bir doğru cavabı olmalıdır. Oyun 5 sualdan
// ibarət olacaq. İstifadəçi cavabını daxil etdikdən sonra, doğru olubolmadığını öyrənəcək.
// Hər doğru cavab üçün 100 xal qazanılacaq. Oyun bitdikdə,
// istifadəçinin toplam qazancı göstəriləcək.
// Bütün sualların cavabı düzgündürsə, "Siz qalib gəldiniz", suala səhv
// cavab olduqda - "Siz məğlub oldunuz" xəbərdarlığı göstərin.
//  Sual verən və cavabı yoxlayan funksiya yazın. Suallar alert()
// metodunda göstəriləcək. Funksiya sualı, cavab variantlarını
// parametr kimi qəbul edir, mesaj generasiya edir və
// oyunçunun düzgün cavabı seçib-seçmədiyini nümayiş
// etdirən boolean dəyəri qaytarır.
//  "50-50" kömək işarəsi əlavə edin. Sualların hər birində
// istifadəçi “50/50” seçim etdikdə eyni pəncərə göstərilir,
// hansıki orada 4 əvəzinə cəmi 2 cavab olur. İkinci dəfə
// "50/50" daxil etməyə çalışıldığı zaman "Siz artıq köməkdən
// istifadə etmisiniz" sözləri ilə xəbərdarlıq görünür.



// let sual1 = {
//     sual: "İtalya Serie A'da 2022-2023 sezonunda, 33 yıl aradan sonra tekrar şampiyon olan Napoli futbol takımının stadının adı nedir?",
//     secA: "a- Roberto Baggio",
//     secB: "b- Diego Armando Maradona",
//     secC: "c- Zinedine Zidane",
//     secD: "d- Pele",
//     cavab: "b- Diego Armando Maradona",
//     yariyariya: "secB,secA",
// }
// let sual2 = {
//     sual: "100'e, 100'ün yüzde 10'u eklendiğinde çıkan sonuç 100'ün yüzde kaçı olur?",
//     secA: "a- Yüzde 10'u",
//     secB: "b- Yüzde 100'ü",
//     secC: "c- Yüzde 110'u",
//     secD: "d- Yüzde 1000'i",
//     cavab: "c- Yüzde 110'u",
//     yariyariya: "secB,secC",

// }
// console.log(alert(prompt(sual2.sual)))
// function fullname (a, b){
//       let user ={
//         ad:a,
//         soyad : b
//       }
//       return user
// }
// console.log(fullname("Mehemmed","Shafiyev" ))



// let time = new Date()






