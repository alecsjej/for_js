function inArray(str ,Arr){
    let checkArrayElement=false;
    
    //проверяем элементы массива на совпадение со строкой
    
    for(i=0;i<Arr.length;i++){
     //   alert(Arr[i] );
        if( Arr[i]==str){
            checkArrayElement=true ;
      break 
        }
    }
    
    return checkArrayElement  ;  
    
}

let string;
string ="2";
let array;
array=[2,5,6];

alert(inArray (string,array));
