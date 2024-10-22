// 1부터 100까지 합 구하기
let sum = new Number();
for(let i = 0; i < 101; i++) {
    sum += i;
}
console.log(sum);

const arr = [10, 20, 30, 40, 50];
// filter, foreach
// 10, 30, 50만 출력

// 방법 1 : 애로우 펑션
arr.filter(i => i % 20 != 0).forEach(i => console.log(i));
arr.filter(i => i % 20 != 0).map(i => i * i / 10).forEach(i => console.log(i));

// 방법 2 : 함수 사용
function f(x) {
    return x % 20 != 0;
}
function f2(x) {
    console.log(x);
}
function f3(x) {
    return x ** 2 / 10;
}
arr.filter(f).map(f3).forEach(f2);

// 방법 3 : 익명 함수
arr
.filter(function(x) {
    return x % 20 != 0;
})
.map(function(x) {
    return x ** 2 / 10;
})
.forEach(function(x) {
    console.log(x);
})

// 합을 구하는 reduce
const arr2 = [1, 2, 3, 4, 5];
const result = arr2.reduce(function(acc, cur) {
    console.log(acc);
    return acc+cur;
}, 0);
console.log(result);
