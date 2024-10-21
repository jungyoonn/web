// 함수
// hoist : 함수를 정의하기 전에 호출해도 정상 동작
// js >> 전체 스캔 > 함수, 변수 정리

console.log(f(5));

function f(x) {
    return x * x;
}

console.log(abc); // undefined
var abc = "1234";

// 익명 함수
// 변수 선언 시 타입이 함수인 대상을 할당
// 선언과 동시에 함수가 실행되며 함수명이 없기 때문에 재호출 불가
var f2 = function (x) {
    return x * x;
}
console.log(f2(20));

console.log(function (x) {
    return x * x;
}(20));

// 괄호로 감싸고 파라미터 넣기
(function(str) {
    console.log("hello" + str);
})("javascript");

// 람다식(애로우 펑션)으로 표현한 형태
((str) => {
    console.log("hello" + str);
})("js");


function process() {
    var kor = 90;
    var eng = 90;
    var mat = 90;
    var avg = (kor + eng + mat) / 3;
    return avg;
}
console.log("홍길동 학생의 평균은 " + process() + "점입니다");

// 두 수를 입력받아 그중 큰 값을 반환하는 함수
function max(x, y) {
    if(x > y) return x;
    return y;
    // return x > y ? x : y; 훨씬 짧은 코드
} // 애로우 펑션으로 바꾸면  var max = (x, y) => x > y ? x : y;
console.log("큰 값은 " +max(10, 5));

// 여러 수를 입력받아 그중 큰 값을 반환하는 함수
// arguments : 매개변수의 개수를 정할 수 없는 함수를 만들어야 하는 경우에 매개변수의 값을 저장해 주는 객체
function max2() {
    var max = -Number.MAX_VALUE;
    for(var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== "number") // 인자 중 하나라도 넘버 타입이 아니면 바로 리턴
            return undefined;

        if(max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max == -Number.MAX_VALUE ? undefined : max;
}
console.log(max2(10, 20, 30, 40));