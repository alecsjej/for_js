//2
let a;
 let b;
let h;
do{
a=prompt("Введите длину верхней грани");

b=prompt("Введите длину нижней грани");
h=prompt("Введите высоту");


}
while(typeof(a)!=Number&typeof(b)!=Number&typeof(h)!=Number)
let S=(((a+b)/2)*h);

alert("Площадь трапеции =" +S);

//3
let wklad;
wklad=prompt("Введите сумму вклада");
let procent;
procent=prompt("Введите процент");
let deposit=wklad;
for(i=0,i<5,i++){

deposit*=(1+procent);
console.log(i + "-ый год" +deposit);
}
//4
a=prompt("Введите число");
if(a==10){
alert("верно");
}
else
{
alert("неверно");
}

//5
if(i<=50)
{
    console.log(i +"/n");
}

///6

