//task 24
//let yas = prompt("Yasinizi daxil edin")

//if(yas<18){
//   console.log("Access denied")}
//else{
//   console.log("Access granted")}




//task 26
//let year = prompt("Il daxil edin")
//if(year%4==0){    console.log("Il uzun ildir")}
//else{     console.log("Il uzun il deyil")}






//task25
// let eded = +prompt("3 dene 2 reqemli eded daxil edin")


// function taportaEded() {
//     let input = prompt("Üç ədəd daxil edim:");
//     let numbers = input.split(" ");

//     if (numbers.length !== 3) {
//         return console.error("Please 3 item")
//     }



//     let a = Number(numbers[0]);
//     let b = Number(numbers[1]);
//     let c = Number(numbers[2]);
//     let ortaEded;


//     if (a < 10 || a > 99 || b < 10 || b > 99 || c < 10 || c > 99) {
//         return console.error("none")
//     }


//     if ((a == b) || (a == c) || (b == c)) {
//         return console.error("not")

//     }

//     if ((a > b && a < c) || (a < b && a > c)) {
//         ortaEded = a;
//     } else if ((b > a && b < c) || (b < a && b > c)) {
//         ortaEded = b;
//     }

//     else {
//         ortaEded = c;
//     }

//     console.log("Tapilan orta eded:", ortaEded);
// }

// taportaEded()








/*
Task-23
Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın, 
hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.
*/
// let value = 10;

// if (value < 15) {
//     return true;
// } else {
//     return false;
// }

// if (!(value > 10)) {
//     return true;
// } else {
//     return false;
// }

// if (value < 20 && value > 5) {
//     return true;
// } else {
//     return false;
// }






// Task-27
// if...else operatoru ilə yazllmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// } 





// Task-28
// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və 
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// function cins() {
//     let cin = prompt("cinsiyyetiniz(M/F)").toUpperCase();
//     let gender;

//     if (cin == "M") {
//         gender = "male";

//     }
//     else if (cin == "F") {
//         gender = "female"
//     }
//     else {
//         return console.error("not")
//     }

//     console.log(gender)

// }
// cins()





// Task-29
// Ayın adını mətnlə konsola yazdıran bir program yazın.
// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.

// function mounsth(){
//     let ay = prompt("ay daxil edin(1/12)");
//     if(ay==1){
//        console.log("Yanvar");
//     }
//      if(ay==2){
//        console.log("Fevral")
//     }
//     if(ay==3){
//         console.log("Mart")
//      }
//      if(ay==4){
//         console.log("Aprel")
//      }
//      if(ay==5){
//         console.log("May")
//      }
//      if(ay==6){
//         console.log("Iyun")
//      }
//      if(ay==7){
//         console.log("Iyul")
//      }
//      if(ay==8){
//         console.log("Avqust")
//      }
//      if(ay==9){
//         console.log("Sentyabr")
//      }
//      if(ay==10){
//         console.log("Oktyabr")
//      }
//      if(ay==11){
//         console.log("Noyabr")
//      }
//      if(ay==12){
//         console.log("Dekabr")
//      }
//      if(ay<1 || ay>12){
//         console.error("duzgun tarix secin")
//      }


// }
//  mounsth() 





// Task-30
// İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
// İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin. 
// Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.
// İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.


// function date() {
//     let tarix = prompt("Tarix daxil edin (il,ay,gün)şəklində.");
//     let numbers = tarix.split(".");

//     if (numbers.length !== 3) {
//         return console.error("Please 3 item")
//     }

//     let il = Number(numbers[0]);
//     let ay = Number(numbers[1]);
//     let gun = Number(numbers[2]);
//     let ay1;
//     if (ay == 1) {
//         ay1 = 'yanvar'

//     }
//     if (ay == 2) {
//         ay1 = 'fevral'
//     }
//     if (ay == 3) {
//         ay1 = 'mart'
//     }
//     if (ay == 4) {
//         ay1 = 'aprel'
//     }
//     if (ay == 5) {
//         ay1 = 'may'
//     }
//     if (ay == 6) {
//         ay1 = 'iyun'
//     }
//     if (ay == 7) {
//         ay1 = 'iyul'
//     }
//     if (ay == 8) {
//         ay1 = 'avqust'
//     }
//     if (ay == 9) {
//         ay1 = 'sentyabr'
//     }
//     if (ay == 10) {
//         ay1 = 'oktyabr'
//     }
//     if (ay == 11) {
//         ay1 = 'noyabr'
//     }
//     if (ay == 12) {
//         ay1 = 'dekabr'
//     }

//     console.log(gun + " " + ay1 + " " + il + "-cu il")

// }
// date()

//DOM document querrySelector() function void funct  return funct  decleartion funct  parametirli/parametirsiz funct  
//hoisting  arrow funct   recursive  clousure  callback  invocked  



// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola 
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.


// function user(username) {
//    console.log(`${username} is active now`); 
// }
//  user("Mehemmed")
//  user("Mehemmed02")
//  user("Mehemmed03")








// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın


// let eded = prompt("3 eded daxil edin").split(" ");
// let maxeded = Math.max(eded[0],eded[1],eded[2])
// console.log(maxeded)





// Task-05
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.


// let eded = prompt("3 eded daxil edin").split(" ");
// let mineded = Math.min(eded[0],eded[1],eded[2]);
// console.log(mineded)


// Task-06
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və 
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');    10 qaytaracaq


// let a = prompt("birinci ededi daxil edin")
// let b = prompt("ikinci ededi daxil edin")
// let emeliyyat = prompt("emeliyyat daxil edin( / * - + )")

// if (emeliyyat == "/" ) {
//     calc(a/b)
//  }
//  else if (emeliyyat == "*" ) {
//     console.log(a*b)
//  }
//  else if (emeliyyat == "-" ) {
//     console.log(a-b)
//  }
//  else if (emeliyyat == "+" ) {
//     console.log(a+b)
//  }
//  else{
//     console.error("emeliyyati duzgun daxil edin")
//  }





// Task-07
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  true qaytaracaq



// let eded = prompt("6 regemli eded daxil edin")
// let a = eded[0]
// let b = eded[1]
// let c = eded[2]
// let d = eded[3]
// let e = eded[4]
// let f = eded[5]
// function islucky() {
//     if(a+b+c == d+e+f){
//         console.log("true:biletiniz shansli biletdir.")
//     }    
//     else{
//         console.log("false:biletiniz shansli bilet deyil.")
//     }
// }
// islucky()




// Task-08
//  capitalizeWords funksiyasını yazın.
//  Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir. 
//  Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
//  Məsələn, capitalizeWords('Hello my name is Harry');  'Hello My Name Is Harry' qaytaracaq.

// let sentence = prompt("Metn daxil edin")

// let capitalizeString = (str) => str[0].toUpperCase() + 
// str.slice(1).toLowerCase();

// let capitalizeWords = (str) => str.split(' ').map(capitalizeString).join(' ');

// console.log(capitalizeWords(sentence));





// Task-09
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.

// function isEven(int){
//   if(int % 2 == 0){
//     return true;
//   }
//   else{
//     return false
//   }
// }
// console.log(isEven(998));





// Task-10
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. 
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +71234567890


let numbere = +prompt("Tell Number :(+7...)")


function calm() {
    if ((number.length == 11) && (numbere[0] == "+") && (numbere[1] == "7")) {
         console.log("True")
    }
    else {
         console.log("False")
    }

}
calm()



