
let numeral;
let check;


function IsNumerInRang(numer){
    numberCheck = false;
    if (numer>0&&numer<10){
 
        numberCheck = !numberCheck;

 
    }
    return numberCheck ;
}
numeral = +prompt("Введите число.");
check = IsNumerInRang(numeral);
alert (check);
