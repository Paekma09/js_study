/* 모든 요소의 값이 10 이하인 배열을 찾고, 각 배열 요소의 평균값을 구한 다음 최대 평균값을 구한다 */
var a = [[2, 4, 6, 8], [1, 5, 12, 3], [7, 6, 8, 5], [5,15, 3, 4], [3, 2, 9, 4]];
var max = Number.NEGATIVE_INFINITY;
mainloop: for (var i = 0; i < a.length; i++) {
    var average = 0;
    for (var j = 0; j < a[i].length; j++) {
        if ( a[i][j] > 10 ) continue mainloop;
        average += a[i][j];
    }
    average /= a[i].length;
    console.log("i = " + i + " : 평균값 = " + average);
    if ( max < average ) max = average;
}
console.log("최대 평균값 = " + max);