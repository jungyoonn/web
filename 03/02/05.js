// 클로져(Closure) : 지역 변수가 함수 종료 후에도 남아 있는 현상
// 클로져가 동작하기 위한 최소 조건 : 함수를 리턴해야 한다
function increaseCount() {
    let n = 0;
    function inner() {
        n++;
        return n;
    }
    return inner;
}

let tmp = increaseCount();
console.log(tmp());
console.log(tmp());
console.log(tmp());

// 재귀 함수
// function f() {
//     f();
// }
// f();

//
console.log(this); // 빈 객체 {} 출력

// 내장 함수
console.log(Number("123.456abcde1234")); // NaN
console.log(parseInt("123.456abcde1234")); // 123까지만 출력된다
console.log(parseFloat("123.456abcde1234")); // 123.456까지만 출력된다

// NaN, Infinity
let nan = NaN;
console.log(typeof nan); // number
let posiInfi = Number.POSITIVE_INFINITY;
let negaInfi = Number.NEGATIVE_INFINITY;
console.log(posiInfi); // Infinity
console.log(negaInfi); // -Infinity
console.log(typeof posiInfi); // number
console.log(typeof negaInfi); // number

console.log(nan === nan); // false (애초에 비교 대상이 될 수 없어서)
console.log(!!nan); // false (몰라서)

// NaN을 확인할 단 하나의 방법은 isNaN() 함수이다
console.log(isNaN(nan)); // true

console.log("============================");
console.log(posiInfi === Infinity); // true
console.log(negaInfi === Infinity); // false
console.log(negaInfi === -Infinity); // true

// Infinity를 확인할 두 가지 방법을 위에서 적용했지만 isFinite() 함수를 이용하면 한 번의 작업으로 확인을 끝낼 수 있다
console.log(isFinite(posiInfi)); // false
console.log(isFinite(negaInfi)); // false

// eval() : 문자를 자바스크립트 코드로 바꿔 주는 함수
// 쓰지 않는 것이 좋다 (보안 위험 이슈)
eval("let str = 'hello'; console.log(str);");