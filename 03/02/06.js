// URL, URI
// URI의 하위 개념이 URL이다

// http://www.javaman.com/post/view?no=123 : URL 형태
// http://www.javaman.com/post/view/123 : URI 형태

// URL : 네트워크 상에서 웹 페이지가 어디에 위치하는지를 나타내는 주소 (locater)
// URI : 네트워크 상에서 웹 페이지를 식별할 수 있게끔 나타내는 주소 (identifier)

let str = 'http://www.javaman.com/search?query=http://www.네이버.com#abcd';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

let resultStr = decodeURIComponent("http%3A%2F%2Fwww.javaman.com%2Fsearch%3Fquery%3Dhttp%3A%2F%2Fwww.%EB%84%A4%EC%9D%B4%EB%B2%84.com%23abcd");
console.log(resultStr);

let obj = { // 메서드란 그냥 객체에 종속된 함수 
    x:10,
    y:"aaaa",
    z:function(){} // 그저 객체 안의 함수라서, 메서드이다. 위의 x와 y는 필드이다.
};

class Student {

}
// 자바와 비슷하게 객체 변수들과 생성자 관련한 것들이 있다.
let student = new Student();