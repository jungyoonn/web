class Student {
    constructor(no, name, score) {
        this._no = no;
        this.name = name;
        this.score = score;
    }
    toString() {
        return `학번 : ${this._no} , 이름 : ${this.name} , 점수 : ${this.score}`;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get no() {
        return this._no;
    }
    set no(n) {
        if(n < 0) {
            return;
        }
        this._no = n;
    }
}
const student = new Student(1, '말똥이', 100);
console.log(student);

console.log(student.name);
console.log(student.getName);
student.setName = '소똥이';
console.log(student.getName);

console.log(student.no);
student.no = 2;
console.log(student.no);

console.log(student.toString());

for(let i in student) {
    console.log(i, student[i]);
}