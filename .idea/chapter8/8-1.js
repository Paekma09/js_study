/* 배열 요소의 제곱합에 대한 제곱근을 구하는 함수 */
function norm(x) {
    var sum2 = sumSquare();
    return Math.sqrt(sum2);
    function sumSquare() {
        sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i] * x[i];
            return sum;
        }
    }
}
var a = [2, 1, 3, 5, 7];
var n = norm(a);
console.log(n); // -> 9.38083151964686