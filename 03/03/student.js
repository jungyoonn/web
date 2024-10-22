let kor = 50;
let eng = 60;
let mat = 70;

let student1 = {
    no: 1,
    name : '머스크',
    kor: 90,
    eng: 80,
    mat: 100,
    total: function() {
        return this.kor+this.eng+this.mat;
    },
    avg: function() {
        return "평균은 " + this.total()/3 + "점";
    },
    toString: function() {
        return this.name + " 학생의 총점은 " + this.total() + "점이고 " + this.avg();
    }
}

let student2 = {
    no: 2,
    name : '주커버그',
    kor: 70,
    eng: 70,
    mat: 80,
    total: function() {
        return this.kor+this.eng+this.mat;
    },
    avg: function() {
        return "평균은 " + this.total()/3 + "점";
    },
    toString: function() {
        return this.name + " 학생의 총점은 " + this.total() + "점이고 " + this.avg();
    }
}

// 평균
// toString >> 이름, 총점, 평균

// 프로퍼티를 이렇게 추가하는 것도 가능하다
student1.avg = function() {
    return "평균은 " + student1.total()/3 + "점";
}

student1.toString = function() {
    return student1.name + " 학생의 총점은 " + student1.total() + "점이고 " + student1.avg();
}

console.log(student1.toString());
console.log(student1);

const students = [];
students.push(student1);
students.push(student2);

// console.log(students);

students.push({
    no: 3,
    name : '빌게이츠',
    kor: 60,
    eng: 100,
    mat: 100,
    total: function() {
        return this.kor+this.eng+this.mat;
    },
    avg: function() {
        return "평균은 " + this.total()/3 + "점 ";
    },
    toString: function() {
        return this.name + " 학생의 총점은 " + this.total() + "점이고 " + this.avg();
    }
});
console.log(students.toString());

// 생성자 함수 (첫 글자는 무조건 대문자)
function Student(no, name, kor, eng, mat) {
    this.no = no;
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;

    this.total = function() {
        return this.kor+this.eng+this.mat;
    };

    this.avg = function() {
        return "평균은 " + this.total()/3 + "점 ";
    };

    this.toString = function() {
        return this.name + " 학생의 총점은 " + this.total() + "점이고 " + this.avg();
    };

    // 캡슐화
    // getter와 setter (가능은 하지만 실무에서 쓰진 않음)
    let _no = no; // 언더바_가 붙으면 내부에서만 쓰이는 용도이니 밖에서 접근하지 말라는 의미
    this.setNo = function(no) {
        _no = no;
    }
    this.getNo = function() {
        return _no;
    }
}
const student3 = new Student(4, '이재용', 100, 60, 60);
console.log(student3.getNo()); // 4
student3.setNo(10);
console.log(student3.getNo()); // 10
console.log(student3.no);
console.log(student3._no); // undefined

console.log(student3);
students.push(student3);
students.push(new Student(5, '발머', 100, 100, 70));

for(let i = 0; i < students.length; i++) {
    console.log(students[i].total());
}

Student.a = 10;
console.log(Student.a); // 10

Student.prototype.area = 20;
const student4 = new Student(6, '워즈니악', 90, 100, 100);
console.log(student4.area); // 20
console.log(student4.a); // undefined
