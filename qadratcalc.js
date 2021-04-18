let A;
let B;
let C;
let Discriminant;
let answort1;
let answort2;


//вводим коэфиценты квадратного уравнения
while(typeof(A)!=number){
A = +prompt("Введите коэфицент А");
if(typeof(A)!=number){

    alert(typeof(C));
}
}
B = +prompt("Введите коэфицент B");
if(typeof(B)!=number){

    alert(typeof(C));
}
C = +prompt("Введите коэфицент C");
if(typeof(C)!=number){

    alert(typeof(C));
}

// вычисляем корни уравнения
discriminant = (B**2)-(4*A*C);
if(typeof(discriminant)==number){

    alert("не число");
}
answort1 = -(B/A)-discriminant;
answort2 = -(B/A)+discriminant;
alert("первый корень =  " + answort1 + " ,второй корень" +  answort2);