//task42
let clockHand;
let time=new Date();

clockHand = time.getMinutes();
alert(" с начала часа прошло" + clockHand + "минут");//1
let text1;
let litleText1;
alert("задание 1");

alert("текст");
text1 = "aaabbbccc";

litleText1 = text1.slice(3,6) ;
alert(litleText1 );




//2
alert ("задание 2");

let text2;
let litleText2;

alert("текст");
text2 = "aaabbbccc";
litleText2=text2.substr(3,3) ;
alert(litleText2 );




//3
alert("задание 3");
let text3;
let litleText3;

alert("текст");
text3 = "aaabbbccc";
litleText3 = text3.substring(3,6) ;
alert(litleText3 );




//определяем местоположение минутной стрелки в алгебра
ических координатах
switch (true ){
 case clockHand <15:
 alert ("минутная стрелка находится в первой четверти");
    break;
    case clockHand <30:
    alert("минутная стрелка находится в четвёртой четверти");
    break;
    case clockHand <45:
    alert ("минутная стрелка находится в третьей  четверти");
    break;
    case clockHand <60:
    alert("минутная стрелка находится во второй четверти");
    break;
    
}