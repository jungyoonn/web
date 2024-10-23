const now = new Date();
console.log(now);
console.log(now.getFullYear(), now.getMonth() + 1, now.getDate());
console.log(now.getHours(), now.getMinutes(), now.getSeconds());
console.log(now.getTime(), now.getDay());

// getDay를 사용하여 현재의 요일을 한글로 출력 0~6
const day = ['일', '월', '화', '수', '목', '금', '토']
console.log("오늘은 " + day[now.getDay()] + "요일입니다");
