//No 1
//Write a function that takes in a string and returns it when reversed

function reversed(food) {
    let reverse=food.reverse;
    
}
let food = "eating"
console.log(reversed(food));

//No 2
//Write a function that takes in the following array and 
//consoles the target if it is found else
null

Target = 23
function divideArray(num) {
    if (num.length<=1) {
        return num;
    }
  
        middl=Math.floor(num.length/2);
        leftIndex=num.slice(0,middle);
        rightIndex=num.slice(middle)
    
    return mergesort(divideArray(left),divideArray(right))
}
function mergesort(left,right) {
    emptyArray=[];
    while (leftIndex && rightIndex) {
        middlIndex=Math.floor((leftIndex+rightIndex)/2)
        if (right[0]<left[0]) {
            emptyArray.push(right.shift())
        }else{
            emptyArray.push(left.shift())
        }
    }
    return[...emptyArray,...left,...right]
    
}
let num = [2,8,0,23,5,45,76];
console.log(divideArray(num));




function binarysearch(nuums,target){
    leftIndex=0
    rightIndex=nuums.length-1
    while(leftIndex<=rightIndex){
      let middleIndex=Math.floor((leftIndex+rightIndex)/2)
      if(nuums[middleIndex]===target){
        return middleIndex
      }else if(nuums[middleIndex]>target){
         rightIndex=middleIndex-1
      }else{
        leftIndex= middleIndex+1
      }
     
     
  
    }
    return null
    
  }
  console.log()





//No 3
//Given years between 2000 and 2023, console all the
// leap years in the following
//sentence, i.e “2020 is a leap year” if not console log 
//i.e “2001 is not a leap year”
for (let i = 0; i >=2000 && i<=2023; i++) {
   if (i%4==0) {
    console.log("leap year");
   }else{
    console.log("is not leap year");
   }
    
}





//No 4
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz”if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (let x = 0;x>=0 && x <=100; x++) {
    if (x%3===0 && x%5===0) {
       console.log("FizzBuzz");
    
    }
    else if (x%3===0) {
        console.log("Fizz");
    }
     else {
        console.log("Buzz");
    }
    
}
// const element = array[x];

//No 5
//Write a function that takes in an array of numbers and 
//returns an array that has all elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
numArray.forEach(element => {
   if (element*4) {
    console.log(element*4);
   }
});

//No 6
//Write a function that takes in an array of strings and
// returns an array with every element turned into a number
let nums = ["10","24","45","56","67"]
let string=nums.split;
console.log(string);