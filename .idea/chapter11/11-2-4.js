/* try/catch/finally 문 */

// 반복문에서 빠져나오기
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
try {
    a.forEach(function (v, i, a) {
        if ( i > 5 ) {
            throw false;
        }
        return a[i] = v * v;
    });
} catch (e) {
    if (e) throw e;
}
console.log(a); // -> [0, 1, 4, 9, 16, 25, 6, 7, 8, 9]