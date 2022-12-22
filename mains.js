//ex.1
function number1(num1,num2,num3,num4){
    let array = [num1, num2, num3, num4];
    array.pop();
    array.shift();
    console.log(array);
}
number1(1,2,3,4,);

//ex.2
function number2(){
let a = [1,2,3,4];
a.push(5);
a.unshift(0);
console.log(a);
}
number2();

//ex.3
function number3(a,b,c){
    let array1 = [a,b,c];
    if (array1.includes(5)){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
number3(1,2,3);
number3(2,5,6);

//ex.4
function number4(){
    let a = [1,2,3,4];
    let b = [5,6,7,8];
    let c = a.concat[b];
    console.log(c);
}
number4();

//ex.5
function number5(ary1, n){
    if(ary1.includes(n)){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

//ex.6
function number6(ary2, s){
    let a = ary2;
    let b = a.indexOf(s);
    console.log(b);
}

//ex.7
function number7(ary3){
    let a = ary3.reverse();
    console.log(a);
}

//ex.8
function number8(ary4){
    let a = ary4;
    if (a.length >= 5 && a.length <= 10){
        return ary4.reverse();
    }
    else{
        return ary4;
    }

}
console.log(number8([1,2,3,4,5,6]));

//ex.9
function number9(ary5, n){
    if(ary5.includes(n)){
        ary5.shift()
       return(ary5.reverse());
    }
    else{
        return ary5;
    }
}
console.log(number9([1,2,3,4], 3));
console.log(number9([1,2,3,4], 5));

//ex.10
function number10(ary1){
    let a = ary1;
    let b = [...ary1];
    console.log(a );
    console.log(b );
}

//ex.11
function number11(ary1){
    console.log(ary1[0]);
}

//ex.12
function number12(ary1){
    let a = ary1.at(-1);
    console.log(a);
}

//ex.13
function number13(ary1){
    let final = ary1.at(-1);
    if (ary1[0] === final){
        return true;
    }
    else{
        return false;
    }
}

//ex.14
function number14(ary1){
    if(ary1[0]=== ary1.at(-1)){
        ary1.pop();
        ary1.shift();
       return ary1.length;
    }
    else{ return ary1;

    }
}
console.log(number14([1,2,3,4,1]));

    

//Part2
function number15(){
    let weirdArray = ['Inception', 'Spiderman', 'Tuesday'];
    let weirderArray = ['Green', 'Saturday', 'Friday', 'Wednesday'];
    weirderArray.reverse();
    let three = weirdArray.concat(weirderArray);
    let movies = [three[0], three[1]];
    three.splice(0,2);
    three.unshift('Monday');
    three.splice(3,1, 'Thursday');
    let color = three.at(-1);
    let colors = three[color]
    three.pop();
    three.splice(0,1,'Sunday');
    let color2 = three.at(-1);
    let color3 = three.at(-2);
    let weekend =[color2, color3] ;
    three.pop();
    three.pop();
    console.log(three, weekend);
}
number15();

//Part3

//ex.1
function number16(){
    let practiceFile = [273.15];
    practiceFile.push(42);
    console.log(practiceFile);
    practiceFile.push("hello");
    console.log(practiceFile);
    practiceFile.push(false, -4.6, "87");
    console.log(practiceFile);

}
number16();

//ex.2,3
function number17(){
    let cargoHold  = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
    cargoHold.splice(5,1,'space tether');
    console.log(cargoHold);
    cargoHold.pop();
    console.log(cargoHold);
    cargoHold.shift();
    console.log(cargoHold);
    cargoHold.unshift(1138);
    cargoHold.push('20 meters');
    console.log(cargoHold);
    console.log(`The cargo hold contains: ${cargoHold}. It has a total of ${cargoHold.length} items.`); 
    cargoHold.splice(2,0,"keys");
    console.log(cargoHold);
    let remove1 = cargoHold.indexOf('instruction manual');
    cargoHold.splice(remove1,1);
    console.log(cargoHold);
    cargoHold.splice(2,3, 'cat', 'fob', 'string cheese');
    console.log(cargoHold);  
} 

//ex.4
function number18(ary1, ary2){
    let three = ary1.concat(ary2);
    if ( three.length > ary1.length){
        console.log("holdCabinet1 ");
    }
    else{
        return;
    }
    console.log(ary1.slice(0,2));
    console.log(ary2.slice(0,2));
    console.log(ary1);//the slice doesmt alter the original array
    console.log(ary2);//the slice doesmt alter the original array
    ary1.reverse();
    ary2.sort();
    console.log(ary1, ary2);//The difference between the two methods is that reverse changes the function from smallest to largest and sort sorts it from largest to smallest.
}
number18([1,2,3], [4,7,6]);


//ex.5
function number19(){
    let str = 'In space, no one can hear you code.';
   console.log(str.split());//not split nothing
   
   console.log(str.split('e'));// split e 

   console.log(str.split(''));// split all the spece 
    let arr = ['B', 'n', 'n', 5];
    console.log(arr.join());
    console.log(arr.join('a'));
    console.log(arr.join(''));
    console.log(arr.join(""));
}
//part 4
function number20(){
    let number1 = [1,2,3,4,5];
    let b= [...number1];
    number1.push(6);
    console.log(number1);
    console.log(b);
}

function number21(){
    let number1 = [1,2,3,4,5];
    let b= number1.slice[0, number1.at(-1)];
    number1.push(6);
    console.log(number1);
    console.log(b);
}

