var arr = ["ABCD", true, 1234];
console.log(arr.length);

var arr2 = new Array(10);
console.log(arr2);
console.log(arr2[0]); // 값을 모르면 undefined

// slice (cf : substring)
var arr3 = arr.slice(1,2); // 1 이상 인덱스 ~ 2 미만 인덱스
console.log(arr); // 원본에는 변화가 없음
console.log(arr3);

// split : 문자열 >> 배열
// join : 배열 >> 문자열

var str = "a-b-c-d-e";
var arr4 = str.split('-');
console.log(arr4);

var str2 = arr4.join('/');
console.log(str2);

// 자바의 배열은 소유 멤버 : length / 자바에서 조인 사용 방법 : String.join(배열, 구분자);

arr = [1, 2, 3, 4, 5];
arr2 = [4, 5, 6, 7];

arr3 = arr.concat(arr2);
console.log(arr3);

arr3 = [...arr, ...arr2];
arr3 = [0, ...arr, 10, ...arr2, 20];
console.log(arr3);

// toString
var num = 1;
console.log(num.toString());
