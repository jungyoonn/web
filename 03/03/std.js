function Student(no, name, kor, eng, mat) {
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;
}

// 프로토타입 : 객체의 메서드를 생성자 함수 내에 정의하지 않고도 생성된 객체에서 호출하여 사용할 수 있다
Student.prototype.total = function() {
    return this.kor + this.mat + this.eng;
};

const s1 = new Student(1, '새똥이', 100, 100, 100);
console.log(s1.total());

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 3); // 중간 제거, 중간 삭제, 중간 추가 가능, 1번 인덱스부터 3개를 지운다
arr.splice(1, 3, 10, 20); // 1번 인덱스부터 3개를 지우고 10, 20을 추가
// slice는 안 바뀜(새 배열에 담아야 함) / splice는 바뀜
console.log(arr);

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}
const arr2 = [1, 2, 3, 4, 5];
arr2.remove(3);
console.log(arr2);
