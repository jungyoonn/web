// toFixed()
let num = 10.1234;
console.log(typeof num); // number

num.toFixed(); // 소수점 n번째 자리까지 나옴 (괄호를 비워 두면 정수 부분만 나옴)
console.log(num.toFixed(2)); // 10.12


num = new Number(20.1234);
console.log(num.toFixed(2)); // 20.12
console.log(typeof num); // object

let str = "abcd";
str = new String("ABCD");

// toString()
num = 20;
console.log(num.toString(2)); // 이진수 10100
console.log(num.toString(16)); // 16진수 14

binaryNum = num.toString(2);
let result = parseInt(binaryNum, 2);
console.log(result); // 20