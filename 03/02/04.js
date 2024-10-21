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