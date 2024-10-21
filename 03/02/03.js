var f = function(x) {
    return x;
}
console.log(typeof f); // function
console.log(typeof f(10)); // number
console.log(typeof f([1, 2, 3, 4])); // object

function myFunc() {
    console.log("출력");
}
console.log(typeof f(myFunc())); // myFunc 함수의 리턴이 없기 때문에 undefined 출력
console.log(typeof f(myFunc)); // function 출력

// 정상적으로 호출하려면
f(myFunc)();

document.addEventListener("click", function() {
    // click 시 할 일
});