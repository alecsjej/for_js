//task42
let clockHand;
let time=new Date();

clockHand = time.getMinutes();
alert(" с начала часа прошло" + clockHand + "минут");


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