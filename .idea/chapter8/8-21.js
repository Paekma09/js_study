/* m부터 n까지의 정수 값을 순서대로 꺼내는 이터레이터를 생성하는 제너레이터 */
function* craeteNumbers(from, to) {
    while (from<=to) {
        yield from++;
    }
}
var iter = craeteNumbers(10, 20);
for (var v of iter) {
    console.log(v); // 10~20 사이의 정수를 순서대로 출력한다
}