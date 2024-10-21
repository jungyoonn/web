// 지역 변수 : 함수 내에서 선언한 변수
// 전역 변수 : 지역 변수가 아닌 변수

var c = 30;
function test() {
    // var a; 호이스팅 처리를 한다
    console.log(a); // undefined
    var a = 10;
    console.log(a); // 10
    console.log(b); // undefined
    console.log(c); // 30
    
}
// console.log(a); // 변수 a가 test 함수 내에서만 살아 있기 때문에 오류가 난다
test();
var b = 20;

for(var i = 0; i < 10; i++) {

}
console.log(i); // 오류가 나지 않는다
{
    {
        {
            {
                {
                    {
                        var num = 30;
                    }
                }
            }
        }
    }
}
console.log(num); // 오류가 나지 않는다

function f1() {
    var local = 30;
    function f2() {
        console.log(local + 50);
    }
    f2();
} 
f1();

// let
var a = 10;
var a = 20; // 같은 변수를 또 선언해도 오류 안 남

// let num = 20;
// let num = 20; // 같은 변수를 또 선언하면 오류 남

// let은 호이스팅이 불가능하다

for(let s = 0; s < 10; s++) {
    console.log(s);
}
// console.log(s); // var와 다르게 오류가 난다

let fn = function(x) {
    console.log("hello " + x);
}
fn("world");

// final double PI = Math.PI;
// const를 미리 선언만 해 두고 싶을 땐 const PI = undefined;
const PI = Math.PI;
// PI = 3.14; 처럼 값의 변경이 불가능하다