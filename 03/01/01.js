var s = {x:10, z:true, no:10};

s.no = 20;
s.name = "가나다";
s.kor = 80;
s.mat = 60;
s.eng = 80;
s.total = function() {
    return this.eng + this.kor + this.mat;
}

console.log(s.no);
// 필드 제거 : delete
delete s.no;
console.log(s);
console.log(s.no); // undefined
console.log(s.total());

var num = 10;

// typeof 연산자 : 단항 연산자, 대상 피연산자의 타입을 문자열로 반환
console.log(typeof num); // 타입이 출력됨 (number)
console.log(typeof num == "number"); // true 출력

num = "10";
num = String(num); // 이렇게도 바꿀 수 있다(정석)
console.log(typeof num); // string이 출력됨

num = "1234";
num -= 0; // 문자열을 숫자로 변환
console.log(typeof num); // number

num = 10;
num = Boolean(String(num)); // 중첩도 가능
console.log(num, typeof num); // true, boolean

// 반복문 예
var num = 10;
for(var i = 10; i--; ) {
    console.log(i);
}

// 문자든 숫자든 이중 부정을 하면 boolean 참이 된다
// 단, false를 이중 부정을 하게 되면 false (ex) "", 0
num = "1234";
num = !!num;
console.log(num);

// 문자열 << >> 숫자
num = !!num;

// 문자열 만들기 : 빈 문자열 "" 붙이기
// 숫자 만들기 : 산술 연산 처리 (숫자가 아닌 문자를 처리하려고 하면 NaN)
// 논리 만들기 : 이중 부정

// 다른 데이터 타입이 논리 연산 중 false가 오는 경우 
// 문자열 >> 빈 문자열
// 숫자 >> 0
// 객체 >> null
// 함수 >> 

console.log(3/0, 0/0); // NaN