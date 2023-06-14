/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a variable, simple below the variable use the assignment operator to set the original variable to a new value.
3. To assign an existing variable to a new variable, follow this example
declare let myVar=5; then declare a new variable by let myNum=myVar

4. Declaring a variable is just declaring it like this 
let num1
console.log(num1) when you would console.log this variable you would get the message undefined we have yet to assign num1;
assigning a variable would to be to actually assign a value to num1 such that num1=7;
5. Psuedo code is a way to write your coding outline with its main elements and functions. It is vital because it gives you a logical roadmap free from the exact syntax of code It is very similar to what Prof. Jordan defines as wire framing.
6. I think that it is important to spend as much time as needed to get a firm outline of what you are coding. Once that is complete then really get into the real coding journey.
*/

// Strings section//

let firstVariable="Hello World";
firstVariable=3;

 secondVariable=firstVariable;

secondVariable="hi there";

let yourName="Chris"
console.log(`Hello, my name is ${yourName}`)



  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a<b);
  console.log(c > d);
  console.log('Name'==='Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false ||false || false || false ||false || true);


  console.log(false===false)
  
  console.log(e === 'Kevin');

console.log(a < b && b< c);
console.log(48!=='48');
/*
console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
  
*/

let animal='cow';

if (animal='cow'){
  console.log("moooooo")
}
else{
  console.log("hey you are not a cow")
}



let age=25;
if (age>=16){
  console.log("here are the keys!")
}
else{
  console.log("sorry you are to young")
}

//loops are next//
for(let i=0;i<=10;i++){
  console.log(i)
}

for (let i=10;i<=400;i++){
  console.log(i)
}

for(let i=12;i<=4001;i+=3){
  console.log(i)
}
// this is the get even problem//
for(i=0;i<=100;i+=2){
  if(i % 2 === 0){
    console.log(i)
    console.log("is even")

  }
  else{
    console.log(i)
    console.log("is not even")
  }
  
}

// here is the multiples of 5 loop//

for(i=0;i<=100;i+=1){
  if(i % 5 === 0){
    console.log(i)
    console.log("high five")

  }
    else if (i%3===0){
      console.log(i)
      console.log('there is a crowd')
    }
  else{
    console.log(i)
    console.log("not a multiple of 5")
  }
  
}

let bank_account = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= 10; i++) {
    bank_account += i;
}
console.log(bank_account)
//look at again if possible//
for (let i=1; i<=100;i++){
  bank_account= i*3;
}


// next few questions//

//the things in arrays are called elements//

//arrays contain items by index they don't guarantee things will be in order//

// a list of small vegetables, names of students in a classromom//

  const quotes = ["hi", "hey", "hello"];

const randomThings = [1, 10, "Hello", true]

// to access the first const first=randomThing[0]

randomThings[2]="world";
console.log(randomThings);

//more array questions//

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// you would select it by ourclass and the index of the element//
ourClass[4]="octocat";


ourClass.push("cloud city");

//more work with arrays//

 const myArray = [5, 10, 500, 20];

myArray.push("Aegon");
delete myArray[0];
myArray.unshift("Bob Marley");
myArray.pop();

Array.prototype.reverse();

let num1=105;
if(num1<=100){
  console.log("little number")
}
else{
  console.log("big number")
}


// monkey in the middle//
let num2=25;
if(num2<5){
  console.log("little number")
}
else if(num2>10){
  console.log("Big number")
}
else{
  console.log("monkey")
}


console.log(`kriysten is rocking ${kristynsCloset['right sock']}'today!')

//some trouble here trying to interpolate the variable from the object above//


//accessing thoms pants array//
console.log(Thoms['shirts']);  
console.log(Thoms['pants']);  




                                             

function printCool("name"){
  return name;
  console.log("name")
}
   printCool("chris")                                          
                                             
  function cubeOf(value)
{
  let cube
  cube = value * value * value
  console.log(cube)
}
cubeOf(5)


function isCharAVowel(z){


        if(z == "A" || z == "E" || z == "I" || z == "O" || z == "U" ) {
            console.log('this is a vowel')
        }
          else if(z=="Y") {
            console.log('y is sometimes a vowel')
          }
         
        else{
            console.log('no this is not a vowel')
        }
}
  isCharAVowel("U")

let array1=[""]
function twoLengths("string1","string2"){
  let length1=string1.length
  let length2=string2.length

  array1.push(length1)
  array1.push(length2)
                                                                                     
}
   //Now moving through the rest of the functions                                          
function maxOfThree(x,y,z){
  if(x>y && x>z) console.log("X = "+x+" is the greatest");
    else if(z>x && z>y) console.log("Z = "+z+" is the greatest");
    else console.log("Y = "+y+" is the greatest");
}
// last function is the longest string in an array//
                                             
function printLongestWord(arra)
  {
    let max_str = arra[0].length;
    let ans = arra[0];
    for (let i = 1; i < arra.length; i++) {
        const maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;





                                             
                                             



                                             

                                             
                                             



                                             
                                         
                                             

                                        