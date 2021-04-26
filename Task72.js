var array;
let sum;
let itemNum;
let arrayVolume;


sum = 0;
itemNum = 0;
arrayVolume = +prompt("Введите размер массива");
var array = new Array;
//кста цикл с  новыми элементами массива работает только  
//при объявлении его аля объект.

for(let i = 0;i<arrayVolume ;i++){
    array[i] = +prompt ("введите значение элемента       массива" + i) ;

}

for(let i = 0;i<array.length;i++){
    sum += array[i];
    itemNum = i+1;

    if(perescet>10){
        i = i+array.length
        itemNum++;
    } 
}

alert ("сумма элементов массива" + sum);
alert("элемент  при котором сумма элементов больше10 это  " + itemNum);
