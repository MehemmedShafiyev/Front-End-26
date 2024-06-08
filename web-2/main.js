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


// let numbere = +prompt("Tell Number :(+7...)")


// function calm() {
//     if ((number.length == 11) && (numbere[0] == "+") && (numbere[1] == "7")) {
//          console.log("True")
//     }
//     else {
//          console.log("False")
//     }

// }
// calm()



// function myDisplayer(some) {
//      document.getElementById("demo").innerHTML = some;
// }

// function myFirst() {
//      myDisplayer("Hello");
// }

// function mySecond() {
//      myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();




//Agile task 01 
//Arqumentsiz,Parametrsiz bir funksiya yazn.
//funksiyada ("Hello world") 10 defe tekrarlansin.

// let text = "Hello World!"
// let txt = text.repeat(10)
// function getRepeat(){
//     console.log(txt) 
// }
// getRepeat()






//task02

// let text = "Hello World!"
// let replay = +prompt("Tekrarlanma sayisini daxil edin")
// let txt = text.repeat(replay)
// function getRepeat() {
//      console.log(txt)
// }
// getRepeat()






//  Task 03

// let a = prompt("birinci ededi daxil edin")
// let b = prompt("ikinci ededi daxil edin")
// let c = prompt("emeliyyat daxil edin( / * - + )")

// function calc(){
//    if (c == "/" ) {
//     calc(a/b)
//  }
//  else if (c == "*" ) {
//     console.log(a*b)
//  }
//  else if (c == "-" ) {
//     console.log(a-b)
//  }
//  else if (c == "+" ) {
//     console.log(a+b)
//  }
//  else{
//     console.error("emeliyyati duzgun daxil edin")
//  }  
// }
// calc()


// Task-01
// Konsola doğum tarixini çıxarın.
// Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, gender, birthday). 
// Konsola doğum tarixini çıxarın.


// let  information = {
//     name:"Rustem",
//     gender: "Kişi",
//     birthday: "18.08.2003",

// }
// console.log(information.birthday)





// Task-02
// Bu obyektə yaş (age) əlavə edin və doğum tarixini silin. 
// Alınmış obyekti konsola çıxarın.


// const information = {
//     name: "Rustem",
//     gender: "Kişi",
//     age: "21",
//     birthday: "18.08.2003"

// }








// foreach 
// map 
// find 
// filter 
// reduce 
// some 
// every 







// Task-04
// Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
// Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə metodlarını əhatə edən client obyekti yaradın.
//     =>client obyekti yaradın.
//   Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
//   - Tam adı müştərinin (fullName).
//   - Kredit limiti (creditLimit).
//   - Cari balans (balans).
//   - Minimum ödənişin faizi (precentOfMinPayment).
//     =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
//   getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
//   Metodun çağırılma nümunəsi:
//   console.log(client.getBalance()).
//   Mesaj nümunələri:
//   «Balansınız 3000»,
//   «Borcunuz 2000».
//      =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
//   getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum 
//   ödəniş məbləği haqqında mesaj qaytarır.
//   Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
//   Metodun çağırılma nümunəsi:
//   console.log(client.getMinPaymant()).
//   Mesaj nümunələri:
//   «Minimum ödənişiniz 240»,
//   «Sizin borcunuz yoxdur».
//      =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
//   withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
//   Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
// client.widthdraw(900)
//      =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
//   refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.





// let clinet = {
//     fullname: "Mehemmed Shafiyev",
//     balance: 3000,
//     creditLimit: 5000,
//     minPercent: 18,
//     getBalance() {
//         if (this.balance < 0) {
//             console.log(`Sizin borcunuz ${this.balance * (-1)}`)
//         }
//         else {
//             console.log(`Sizin balansiniz ${this.balance} AZN `)
//         }
//     }
// },
//     refill() {

//     }


// clinet.getBalance()












// Task-05
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//   - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.
//   Metodlar parametr kimi 2 ədəd götürür və bu ədədlər üzərində müvafiq əməliyyatın nəticəsini qaytarır.
//   Yaddaşla işləmək imkanı əlavə edin.
//   - Obyektə dəyəri saxlamaq üçün özəllik əlavə edin. Onunla işləmək üçün metodlar yaradın:
//   dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi, yaddaşdan dəyərin oxunması.

// const calculator ={
//  memory:0,

// add:function(a,b){
//     return a+b
// },
// subtract:function(a,b){
//     return a-b
// },
// multiply:function(a,b){
//     return a*b
// },
// divide:function(a,b){
//     if(b===0){
//         console.log("0-a bolme yoxdur.")
//     }
//     else{
//         return a/b
//     }
// },

// storeInMemory:function(value){
//  this.memory= value;
// },
// clearMemory:function(){
//  this.memory = 0;
// },
// readMemory:function(){
//   return  this.memory; 
// },
// }


// console.log(calculator.add(5,6));
// console.log(calculator.subtract(7,6));
// console.log(calculator.multiply(2,4));
// console.log(calculator.divide(8,2));


// calculator.storeInMemory(555);
// console.log(calculator.readMemory());

// calculator.clearMemory();
// console.log(calculator.readMemory());




// Task-01
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. 
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın. 
// Son dəyəri konsola çıxarın.


// let a = +prompt("iki regemli eded daxil edin")

// let i = a
// while (i < 100) {
//     i += 7
//     console.log(i)
// }


// Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.



// const n = prompt("say daxil edin")
// let i=0

// while (i < n) {

//     console.log( "I know how to use cycles")
//     i++
// }






// Task-03
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// i = 100
// while (i < 1000) {

//     if (i %5 == 0 ) {
//         console.log(i)

//     } i++
// }



// Task-04
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

// i = 10
// while (i < 100) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
//     i++
// }






// Task-05
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.

// function dovr() {
//     let eded = prompt("eded daxil edin")
//     i =100 
//     cem =0
//     while(i <= 999) {
//       if(i % eded == 0) {
//         cem += i  
//       }
//        i++
//     }
//     console.log("cem "+cem)
//   }

//   dovr()





// Task-06
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.

// let n = prompt("eded daxil edin")
// while (n > 0) {
//     if (n % n == 0 && n % 1 == 0) {

//         if (n % 2 !== 0) {
//             if (n % 3 !== 0) {
//                 if (n % 5 !== 0) {
//                     if (n % 7 !== 0) {

//                     }
//                 }
//             }
//         }
//     }


// }


// function sadeEded() {
//     let n = prompt("eded daxil edin");
//     while(n >= 0) {
//       let sadedi = true;

//       if (n <= 1) {
//           sadedi = false;
//       } else {
//           let i = 2
//           while(n > i) {
//                if(n % i === 0) {
//                   sadedi = false;
//               break;
//                 }
//                 i++;
//           }

//       }

//       if(sadedi) {
//           console.log(n);
//       }
//       n--;
//     }
//   }

//   sadeEded()


// function sadeEded() {
//     let n = prompt("Eded daxil edin");

//     while (n >= 0) {
//         let sadedi = true;

//         if (n <= 1) {
//             sadedi = false;
//         } else {
//             let i = 2;
//             while (i * i <= n) {
//                 if (n % i === 0) {
//                     sadedi = false;
//                     break;
//                 }
//                 i++;
//             }
//         }

//         if (sadedi) {
//             console.log(n)
//         }
//         n--;
//     }
// }

// sadeEded()






// Task-08
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.



// let text = prompt("metn daxil edin").split(" ")
// let reverse = text.reverse("")
// let reverseText=text.join(" ")
// console.log(reverseText)






// let text = prompt("Metn daxil edin")
// let reverse = ""

// for (i = text.length-1; i >= 0; i--) {
//     if (text[i] !== " ") {
//        reverse+=text[i]
//     }
//      else{

//         reverse=""
//     }
// }
// console.log(reverse)








// let text = " salam necesen yaxsi" 
// let reverse = ""


// for(i=text.length-1;i>=0;i--){
//     if (text[i] == ' ') {
//         for (let j = i; j < text.length; j++) {

//             reverse += text[j]

//         }
//     }else{
//         console.log(reverse)
//         reverse = ''

//     }
// }
// console.log(reverse)





// Task-09
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let text = "men.sen,o.biz.siz"

// for (i = 0; i < text.length; i++) {
//     if (text[i]===".") {
//        console.log(i)
//         break;
//     }

// }







// Task-10 (isNaN)
// Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.

let text = "men9.gkr6in"
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
for (i = 0; i < text.length; i++) {
    if (text[i] == num) {
        console.log("Metnde reqem var")
    }
}
console.log(text)