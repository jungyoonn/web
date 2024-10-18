var arr = [];
arr.push(10);
arr.push(30);
arr.push(5);
arr.push(20);

console.log(arr);
arr.splice(0, 0, 40);
// arr.unshift(40); 0번 인덱스에 40 추가
console.log(arr);

arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);