console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Should say "Hello, Maya!":', helloName('Maya'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log('Should say 8:', addNumbers(3, 5));
console.log('Should say -8:', addNumbers(-3, -5));


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum ){
  return firstNum*secondNum*thirdNum;
}

console.log('Should say 6:', multiplyThree(2,3,1));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length -1];
}

console.log('Should say undefined:', getLast([]));
console.log('Should say 3:', getLast([1,2,3]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for(let i=0; i<array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}

console.log('Should say true:', find(3, [4, 5, 6, 4, 3, 1]))
console.log('Should say false:', find(2, [1,4,5,6]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let stringArray = string.split('');
  if(letter === stringArray[0]){
    return true;
  }
  return false;
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(newArray) {
  let sum = 0
  // TODO: loop to add items
  for(let number of newArray){
    sum += number;
  }
  return sum;
}

console.log('Sum of array should display 10:', sumAll([2,4,1,3]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function returnPositiveArray(inputArray) {
  let positiveArray = []
  for(let number of inputArray){
    if(number > 0){
      positiveArray.push(number)
    }
  }
  if(positiveArray.length > 0){
    return positiveArray;
  }else{
    return [];
  }
}

console.log('Should return array of positive numbers:', returnPositiveArray([3,-1,-2,5,6]));
console.log('Should return empty array:', returnPositiveArray([-3,-4,-5]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// FROM CODEWARS:

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

let cubeChecker = function(volume, side){
  if(volume <= 0 || side <= 0){
   return false
 }
 return (Math.pow(side, 3) === volume) ? true: false;
};

console.log('Should say true:', cubeChecker(27, 3));
console.log('Should say false:', cubeChecker(0, 2));
console.log('Should say false:', cubeChecker(18, 2));