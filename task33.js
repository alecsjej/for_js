let longString1;

let changeString1;
let i=0;

longString1 = prompt ("Введите строку");
for (let i=0;i<1;i++){
    changeString1 = longString1[i].toUpperCase() ;
}

alert(changeString1 + longString1.slice(1));


// Сплсоб2

let longString2;
let changeString2;


longString2 = prompt ("Введите строку");
 changeString2=longString2[0].toUpperCase() ;

alert(changeString2+longString2.slice(1));



