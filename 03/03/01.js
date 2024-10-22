let obj = { 
    x:10,
    y:'1234',
    z:function(){} 
};
console.log(obj.x); // 10
obj.x = 20;
console.log(obj.x); // 20

obj.x = function() {
    console.log('hello world');
    
}
console.log(obj.x); // [Function (anonymous)]
obj.x(); // hello world

// 객체의 프로퍼티에 접근하는 방법
obj['x']();

// 객체에 프로퍼티 추가하는 방법
obj.a = undefined; // a가 없어도 자동으로 추가됨
console.log(obj.a);

// 객체에 프로퍼티 제거하는 방법
delete obj.y;
console.log(obj); // x, z, a만 출력

let arg = {'0': 'a', '1': 'b'};

// 심볼
let subName = Symbol();
console.log(typeof subName); // symbol

let info = {
    [subName] : '자바스크립트',
    subName : '제이쿼리'
};
console.log(info, info[subName], info.subName);
