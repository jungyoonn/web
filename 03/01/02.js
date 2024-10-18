var name = '윤석렬';
var age = 60;

var strings = '대통령 ' + name + "은 나이가 " + age + "살입니다";
console.log(strings);
strings = ``; // 이것도 문자열임
strings = `
    대통령 ${name}은
    나이가 ${age}살입니다
`;
console.log(strings);

a = 10;
b = "10";
if(a == b) {
    console.log('출력');
}

if(a === b) {
    console.log('=== 출력');
}

if(a !== b) {
    console.log('!== 출력');
}

// 배열
var arr = []; // 배열 리터럴
var arr = new Array(10); // 10개의 공간을 가지는 배열
var arr2 = new Array(10, 20); // 10과 20을 값으로 가지는 2칸의 배열

arr[0] = 10;
arr[1] = 'abcd';
arr[2] = true;
arr[3] = undefined;
arr[4] = [1, 2, 3, 4];
arr[5] = {x:10, y:20};
// 위 값들을 전부 넣을 수 있다

console.log(arr);
console.log(arr2);
console.log(arr[5].y); // 20
console.log(arr[5]['x']); // 10
console.log(arr[4][2]); // 4번 인덱스의 2번 인덱스 값

arr[5].x = 30; // 값 지정도 가능
console.log(arr.length); // 길이 출력도 가능

console.log(arr[100]); // undefined
arr[99] = 1234;
console.log(arr); // undefined가 아니게 된다

// 배열의 길이 줄이기
arr.length = 2;
console.log(arr);