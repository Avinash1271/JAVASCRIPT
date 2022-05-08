/****  Section 1👉 we need to do it in console ****/
//alert("Welcome, to JavaScript practice");
// console.log('Welcome, to JavaScript practice');

/**** Section 2👉 Code Editor for writing JS ****/


/**** Section 3👉 values and variables in JavaScript ****/
// var nameee='Avinash';
// console.log(nameee);
// //types of operator
//  console.log(typeof(nameee));


/**** Section 4👉 Data Types in JavaScript ****/
//console.log(10+"15");   1015

//console.log(10-"5");    5 //bug
//console.log("java"+"script");  //javascript
//console.log("java"-"script");   NaN(not a number)
// ### in javascript 1 represent true and 0 represent false
//console.log(true+false);  1+0=1
//console.log(true-false);   1-0=1

//###diffrence b/w null and undefined??###
// var iAmNull=null;
// console.log(iAmNull); //null
// console.log(typeof(iAmNull));// ans is object but null is not a object this is also bug in js.

// var iAmUndefined;
// console.log(iAmUndefined); //undefined
// console.log(typeof(iAmUndefined)); //data type is undefined


//### what is NaN??###
// NaN is a property of the global object.
//in other words,it is a variable in global scope.
//The initial value of NaN is Not-a-Number.
//Example.......
// var myNumber="9155107111";
// var myName="Avinash";
// console.log(myNumber);
// console.log(myName);

// console.log(isNaN(myNumber));  //false
// console.log(isNaN(myName));  ///true
// if(isNaN(myName)){
//     console.log("Plz enter a valid number");
// }
// if(isNaN(myNumber)){
//     console.log("its a valid number bro");
// }

//  NaN===NaN;
//  console.log(NaN===NaN); //false
//  isNaN(NaN);
//  console.log(isNaN(NaN));  //true
//  Number.NaN===NaN ;
//  console.log(Number.NaN===NaN);  //false
// isNaN(Number.NaN);
// console.log(isNaN(Number.NaN));  //true
// Number.isNaN(NaN);
// console.log(Number.isNaN(NaN));  // true



/**** Section 5👉 Arithmetic operators in JavaScript ****/
//1.***Assignment operators***
//An assignment operators assigned a value to its left operand based on the value of its right operand.
//The simple assignment operator is (=) 
// var x=10;
// var y=10;
// console.log("both x and y are equal"+ x==y); //false
// console.log(x==y); // true 😱😱 wtf in line number 62 and 63
//console.log(`Both x and y are equal: ${x===y}`); //true in ECMAscript 



//2.***Arithmetic operators in javascript***
//An Arithmetic operators takes numerical values(either literals or variables) as their operandsand returns a single numerical value.
// console.log(5+10); //15
// console.log(5-10); //-5
// console.log(5*10);  //50
// console.log(17/3);  //5.666666666666667
// console.log(17%3);  //2

//Increment and decrement operator
//operators: x++ or ++x or x-- or --x
//(i) if used postfix, with operator after operand(for example x++),
//    the increment operators increment and returns the value before incrementing;
//(ii) if used prefix, with operator after operand(for example ++x),
//    the increment operators increment and returns the value after incrementing;
// var num=12;
// var newNum=num++;
// console.log(num); //13
// console.log(newNum); //12
//postfix increment operator means the expression is evaluated first using the original
// value of the variable and then the variable is incremented(increased).

// var num=12;
// var newNum=++num;
// console.log(num); // 13
// console.log(newNum); // 13
//prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.



//***3.Comparision operators***
//A comparision operators compares its operands and returns a logical value
//based on whether the comaparision is true.
// var a=30;
// var b=20;
//Equal(==)
//console.log(a==b);//false
//Not Equal(!=)
//console.log(a!=b);//true
//Greater than equal to
//console.log(a>=b);//true



//***4.Logical operatotors***
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.
//console.log(a > b && b > -50 && b < 0); //true

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.
//console.log((a < b) || (b > 0) || (b > 0)); //false

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.
//console.log(!((a>0) || (b<0)));  //false
// console.log(!true);  //false



//*** 5️. String Concatenation(operators)***
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.
// console.log("Hello World");

//console.log("hello " +  "world");

//var myName = "Avinash";
//console.log(myName + " Avinash");
//console.log(myName + " kumar");
//console.log(myName + " kumar kr");



//QUES1. write a prog to swap a two numbers
// var a = 5;
// var b = 10;
// output b=5; a=10
// var c = b; //c = 10
// b = a; // b = 5;
// a = c;
// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

//QUES2. write a prog to swap a two numbers withot using third variable
//var a = 5;
// var b = 10;
// // output b=5; a=10
// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;
// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?
// var num1 = 5;
// var num2 = '5';
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2 );
// var num1 = 5;
// var num2 = '5';
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1);
// console.log(num2);
// console.log(num1 === num2 );



//**** Section 6👉 Control Statement - 
//** 1️.If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.

//QUES:-write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.
// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }

// What is truthy and falsy values in Javascript?
// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway
// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }
//**2.SWITCH statement */
// var area="circle";
// var PI=3.142,l=5,b=4,r=3;

// if(area=="circle"){
//     console.log("The area of circle is:"+PI*r**2)
// }
// else if(area=="triangle"){
//     console.log("The area of triangle is:"+(l*b)/2)
// }
// else if(area=="rectangle"){
//     console.log("The area of rectangle is:"+l*b)
// }
// else{
//     console.log("plz input valid data")
// }

// var area="circle";
// var PI=3.142,l=5,b=4,r=3;

// switch(area){
//     case 'circle':
//         console.log("The area of circle is:"+PI*r**2);
//     case 'triangle':
//         console.log("The area of triangle is:"+(l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("The area of rectangle is:"+l*b);
//     default:
//         console.log("plz enter valid data");
// }

//**3.while loop statement */
// var a=10;
// while(a<=10){
//     console.log(a);  //infinite loop
// }

// var a=0;
// while(a<=10){
//     console.log(a);  
//     a++;
// }
//**4.do while loop */
// var a=0;
// do{
//     debugger;
//     console.log(a); 
//     a++;
// }while(a<=10);
//**5.for loop */
// for(var a=0;a<=10;a++){
//     console.log(a);
// }
// for(var a=1;a<=10;a++){
//     console.log("8 x "+a+"= "+8*a);
// }

//**function in js */
// function sum(){
//     var a=10;
//     var b=20;
//     var total=a+b;
//     console.log(total);
// }
// console.log(sum());  //calling a function

// function sum(a,b){     passing parameter
//     var total=a+b;
//     console.log(total);
// }
// (sum(10,20));  //passing argument

// var fun=function(a,b){       //function without a name is called anonymus function
//     return total=a+b;
// }
// console.log(fun(15,10));



//#####ECMAscript or ES6 #####//
//**1..LET vs CONST vs VAR */
// var myName="Avinash";
// console.log(myName);
// myName="kumar";
// console.log(myName);

// let myName="Avinash";
// console.log(myName);
// myName="kumar";
// console.log(myName);

// const myName="Avinash"; // we can't change the value
// console.log(myName);
// myName="kumar";
// console.log(myName);

// function aboutMe(){
//     let myFirstName="Avinash";        //Avinash
//     console.log(myFirstName);
//     if(true){
//         let myLastName="kumar";
//         console.log(myFirstName)       //Avinash
//         console.log(myLastName)        //kumar
//     } 
//     //console.log(myLastName)           //error:-bcoz value declared in if block using let
//                                       //so we can print in only that particular block
// }
// aboutMe()
//var==>function scope
//let and const==>block scope

//**2..Template literals */
// for(let a=1;a<=10;a++){
//     let tableof=9;
//     //console.log(tableof+" * "+a+" = "+tableof*a)
//     console.log(`${tableof} * ${a} = ${tableof*a}`);
// }

// //**3..Default parameters */
// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5));    //25

//**4..Fat Arrow function */
//Normal way to function writting
// console.log(sum());
// function sum(){
//     let a=3,b=4;
//     let total=a+b;
//     return `the sum of a and b is = ${total}`;
// }

// console.log(sum());   ///we can't call function before in Fat arrow fuc.
// const sum = () => {
//     let a=3,b=4;
//     let total=a+b;
//     return `the sum of a and b is = ${total}`;
// }
// console.log(sum());

// const sum = () => `the sum of a and b is ${(a=6)+(b=5)}`;
//console.log(sum());


//##### Arrays in javascript #####//
//when we use var,we can stored only one value at a time
// var a="ramesh";
// var b="avinash";
// var c="kumar";
// var arr=['ramesh',20,true,'avinash'];

//**traversal in an array */

// var arr=['ramesh',20,true,'avinash'];
// console.log(arr[0]);
// console.log(arr.length);
// for(var i=0;i<=arr.length-1;i++){
//     console.log(arr[i]);
//}

// // for in loop//
// var arr=['ramesh',20,true,'avinash'];
// for(let i in arr ){
//     console.log(i);  //only index
// }

// for of loop//
// var arr=['ramesh',20,true,'avinash'];
// for(let i of arr ){
//     console.log(i);    //only elements
// }

//Arrays.prototype.forEach()
//calls a fun for each element in arr
// var arr=['ramesh',20,true,'avinash'];
// arr.forEach(function(element,index,array){
//     console.log(element+" "+index+" "+array);
// })

// var arr=['ramesh',20,true,'avinash'];    //using fat arrow fun
// arr.forEach((element,index,array)=>{
//     console.log(element+" "+index+" "+array);
// })

//**searching and filter in an array */

//##<a>Array.prototype.indexOf()
// var arr=['avinash','kumar','ramesh','virat','rohit','raina']
// console.log(arr.indexOf('virat',4)); //always search forward from given index(here given is 3) number
                                     //return -1 if not present

//##<b>Array.prototype.LastIndexOf()                                  
// var arr=['avinash','kumar','ramesh','virat','rohit','raina']
// console.log(arr.lastIndexOf('virat',3))   //searching from last index in backward

//##<c>Array.prototype.includes()
//search the element and return boolean value 
//always search in forward dirrection from given index
// var arr=['avinash','kumar','ramesh','virat','rohit','raina']
// console.log(arr.includes('virat',2))

//##<d>Array.prototype.find()
//returns the found element in tha array,if some element in the array satisfies the 
//testing function,or undefined if not found.
//it always returns only one element

//  const prices=[200,300,350,400,450,500,700,750];
// prices<400
// const findElements=(prices.find((currVal)=>{
//     return currVal<400;
// }))
// console.log(findElements);

// const findElements=(prices.find((currVal)=>currVal<400));
// console.log(findElements)

// console.log(prices.find((currVal)=>currVal<400))

//##<E>Array.prototype.findIndex()
//return found index in an array and -1 if not found
// const prices=[200,300,350,400,450,500,700,750];
// console.log(prices.findIndex((currVal)=>currVal<400))

//##<F>Array.prototype.filter()
//returns a new array containing all elements of the calling array for which the
//provided filtering function returns true
// const prices=[200,300,350,400,450,500,700,750];
// const newPriceTag=prices.filter((ele,index)=>{
//     return ele<400;
// })
// console.log(newPriceTag);


//**How to sort and compare an array */
// const months=['march','jan','aug','feb','dec','nov']
// console.log(months.sort());      //[ 'aug', 'dec', 'feb', 'jan', 'march', 'nov' ]

// const arr=['1','200','40','10','1000']  ///[ '1', '10', '1000', '200', '40' ]    
// console.log(arr.sort());   //returns in ascending order if string i.e A/q to first letter

// const arr1=[1,200,40,10,1000]; //not string still returns in ascending order
// console.log(arr1.sort());  //[ 1, 10, 1000, 200, 40 ]
//because of this the sort() method will produce an incorrect result
//when sorting numbers


//**How to insert,add,replace and delete elements in an array(CRUD) */
//##<G>Array.prototype.push()
//add one or more elements to the end of an array and returns the new length of the array
// const animals=['cat','dog','man','lion'];
// animals.push('goat');
// const count1=animals.push('goat');
// console.log(animals);   //[ 'cat', 'dog', 'man', 'lion', 'goat' ]
// console.log(count1);    //6

//##<H>Array.prototype.unshift()
//add one or more elements in begining
// const animals=['cat','dog','man','lion'];
// animals.unshift('goat','chicken');
// console.log(animals);        //[ 'goat', 'chicken', 'cat', 'dog', 'man', 'lion' ]

// const myNumbers=[1,2,3,4];
// myNumbers.unshift(4,6);
// console.log(myNumbers);     //[ 4, 6, 1, 2, 3, 4 ]


//##<I>Array.prototype.pop()
//remove last element
// const animals=['cat','dog','man','lion'];
// animals.pop();
// console.log(animals);    //[ 'cat', 'dog', 'man' ]

//##<J>Array.prototype.shift()
//remove first element of an array
// const animals=['cat','dog','man','lion'];
// animals.shift();
// console.log(animals);      //[ 'dog', 'man', 'lion' ]

//Example 1:-add 'dec' at the end of an array
// const months=['jan','march','april','june','july'];
// const newMonth=months.splice(months.length,0,'dec');
// console.log(months);    //[ 'jan', 'march', 'april', 'june', 'july', 'dec' ]
// console.log(newMonth);  //[]

// const months=['jan','march','april','june','july'];
// const updatMon=months.splice(1,1,'March');
// console.log(months)      //[ 'jan', 'March', 'april', 'june', 'july' ]

// const months=['jan','march','april','june','july'];
// const indexofmonths=months.indexOf('march');
// if(indexofmonths!=-1){
//     const updatMon=months.splice(indexofmonths,1,'March');
//     console.log(months);
// }else{
//     console.log("data not found");
// }

//Example 2:-delete june from array
// const months=['jan','march','april','june','july'];
// const indexofmonths=months.indexOf('june');
// if(indexofmonths!=-1){
//     const delMon=months.splice(indexofmonths,1,);
//     console.log(months);        //[ 'jan', 'march', 'april', 'july' ]
//     console.log(delMon)         //[ 'june' ]
// }else{
//     console.log("data not found");
// }

//##<k>Array.prototype.map()
// const array1=[1,4,9,10,23,13];
// const newArr=array1.map((curEle,index,arr)=>{
//     return curEle>9;
// })
// console.log(newArr)          //[ false, false, false, true, true, true ]

// const array1=[1,4,9,10,23,13];
// const newArr=array1.map((curEle,index,arr)=>{
//          return `Index no. ${index} and the value is ${curEle} belongs to ${arr}`
// })
// console.log(newArr)

//Example:-find square root of all elements
// let arr=[25,36,49,64,81]
// let arrsqr=arr.map((currEle)=>Math.sqrt(currEle))
// console.log(arrsqr)

// //Example:-multiply each ele by 2 and return ele which are>10
// let arr=[2,3,4,6,8]
// let ans=arr.map((currEle)=>{
//     return currEle*2;
// }).filter((currEle)=>{
//     return currEle>10;
// }).reduce((accumulator,currEle)=>{
//     return accumulator+=currEle; 
// })
// // // 2nd way :- let ans=arr.map((currEle)=>currEle*2).filter((currEle)=>currEle>10);
//  console.log(ans);

//##<L>Array.prototype.reduce()
//it takes four agrs
//accumulator
//current value
//current element
//source array
// let arr=[3,5,6];
// let sum=arr.reduce((accumulator,currele,currIndex,arr)=>{
//     return accumulator+=currele;
// })
// console.log(sum)   //14

//flat an array into 1d
// const arr=[
//     ['zone-1','zone_2'],
//     ['zone-3','zone_4'],
//     ['zone-4','zone_6'],
//     ['zone-7',['zone_8','zone_9']],
// ]
// let flatArray=arr.reduce((accum,currVal)=>{
//     return accum.concat(currVal);
// })
// console.log(flatArray);


//##### String in javascript #####//
// let myName='avinash';
// let my2Name='avinash';
// //let ytName=new String("AVINASH");
// let ytName='AVINASH';
// console.log(myName);
// console.log(ytName);

// let myName='Avinash kumar';
// console.log(myName.length);

// let anySentence="we are so-called \"vikings\" from north";
// console.log(anySentence);

// let anySentence='we are so-called "vikings" from north';
// console.log(anySentence);

// const myData='i am a soft eng';
// console.log(myData.indexOf("a",5));

// const myData='i am a soft eng';
// let sData=myData.search("soft");
// console.log(sData);

//**Extracting string **//
//3 methods for extracting a part of string
// slice(start,end);
// subststring(start,end);
// substr(start,end);

//The slice() method
// it extracts a part of string and returns a extracted part in a new string
// var str='apple,banana,mango'
// let res=str.slice(0,4);
// console.log(res);

//ques:- display only 280 characters
// let myTweets='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publicati...'
// let myactualTweet=myTweets.slice(0,280);
// console.log(myactualTweet);

//the substring() method
//similar to slice md and diff is it cannot accept -Ve index
// var str='apple,banana,mango'
// let res=str.substring(0,4);
// console.log(res);

//the substr() method
// var str='apple,banana,mango'
// let res=str.substr(-5);
// console.log(res);

//**Replacing string content**//
// let myData='i am a soft eng Soft';
// let replaceValue=myData.replace('soft','Soft')
// console.log(replaceValue);

//the charAt() method
// let str="HELLO WORLD"
// console.log(str.charAt(0));

//the charCodeAt() method
// let str="HELLO WORLd"
// console.log(str.charCodeAt(0));  72

// let myName='avinash'
// console.log(myName.toUpperCase());

// var str= "        hello       world!   ";
// console.log(str.trim());

//converting string to an array
// var txt='a,b,c,d,e'
// console.log(txt.split(","))
// console.log(txt.split(" "))


//##### DATE AND TIME IN JAVASCRIPT #####//
// let currDate1=new Date();
// console.log(currDate1);

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
// console.log(Date.now());

// var d=new Date(2021,12,27,10,34,30,0)
// console.log(d.toLocaleString())

// var d=new Date("December 27,2021 18:51:32")
// console.log(d.toLocaleString())

// const currDate=new Date();
// console.log(currDate.toLocaleString())
// console.log(currDate.getDate())
// console.log(currDate.getFullYear())
// console.log(currDate.getMonth())

// (function(){
//     setInterval(()=>{
//         console.log(new Date().toLocaleString())
//     },1000)
// })();


//##### Math object IN JAVASCRIPT #####//
// console.log(Math.PI);
// console.log(Math.round(10.2565));
// console.log(Math.pow(2,3))






