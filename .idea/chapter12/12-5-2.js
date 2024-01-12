/* y 플래그 */
var text = "1 little, 2 little, 3 little indian";
var reg = /\d+ little/y;
console.log(reg.sticky);    // -> true
reg.lastIndex = 10;
console.log(reg.exec(text));    // -> ["2 little"]
console.log(reg.lastIndex); // -> 18
reg.lastIndex = 9;
console.log(reg.exec(text));    // -> null
console.log(reg.lastIndex); // -> 0

// 자바스크립트 실행 환경이 각 플래그를 지원하는지 여부 확인 함수
function hasRegExpY() {
    try {
        new RegExp(".","y");
        return true;
    } catch (e) {
        return false;
    }
}