const str = "가나다라가나다라가나다라";
console.log(str.charAt(2), str[2]); // 다 다

// includes() : 괄호 안의 문자열이 포함되어 있으면 true
console.log(str.includes("다")); // true

// slice() : 1번 인덱스부터 3번 미만 인덱스까지
// substring() : slice()와 같음
// substr() : 1번 인덱스부터 3개의 문자를 출력
console.log(str.slice(1, 3), str.substring(1, 3), str.substr(1, 3));

// 첫 번째 '가'만 바뀜
console.log(str.replace('가', '마'));
// 모든 '가'를 다 바꿈
console.log(str.replaceAll('가', '마'));

// concat() : 문자와 문자를 연결
console.log(str.concat('가나'));

// charCodeAt(idx) : 주어진 인덱스에 해당하는 유니코드 값을 리턴

let s = "";
for(let i = 0; i < 26; i++) {
    s+=String.fromCharCode(65+i)
}
console.log(s);
console.log(s.charCodeAt(0));

const arr = [10, 20, 3, 44, 5];
arr.sort((a, b) => a - b); // 파라미터로 함수 콜백 + 콜백된 함수는 파라미터 두개
arr.sort(function(a, b){
    return b - a;
})
console.log(arr);

// for in = 인덱스가 필요한 경우 사용
// for of = 이터러블 객체에 사용 가능, js에선 배열밖에 없다.

for(let i of arr){
    console.log(i);
}

const multi = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 11, 12, 13]
];
// for in
for(let i in multi) {
    for(let j in multi[i]){
        console.log(multi[i][j]);
    }
}
// for of
for(let sub of multi) {
    for(let value of sub){
        console.log(value);
    }
}
