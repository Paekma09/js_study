/* 카운터 함수를 만드는 함수 */
function makeCounter() {
    var count = 0;
    return f;
    function f() {
        return count++;
    }
}
var counter = makeCounter();
console.log(counter()); // -> 0
console.log(counter()); // -> 1
console.log(counter()); // -> 2

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1()); // -> 0
console.log(counter2()); // -> 0
console.log(counter1()); // -> 1
console.log(counter2()); // -> 1