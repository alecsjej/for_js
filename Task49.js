let numeral;
let primeNumber;


numeral = +prompt("Введите число которое желаем проверить на простоту");
primeNumber  = false
if (numeral>0){
    for (let i = 2;i<=Math.sqrt(numeral);i++ ){

        if(numeral%i == 0){
            primeNumber  = !primeNumber;
        }

    }
alert(primeNumber);

}
