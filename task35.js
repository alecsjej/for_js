let checkNumber;

checkNumber=calcBoolean();
alert(checkNumber);

function calcBoolean(checkNumber){
first = +prompt("Введите первое число");
second = +prompt("Введите второе число");

if(first == second ){

    checkNumber = true;
}else{
     checkNumber = false;
}
    return checkNumber ;
}
