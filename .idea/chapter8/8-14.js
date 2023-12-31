/* 메모이제이션 */
function memorize(f) {
    var cache = {};
    return function (x) {
        if (cache[x] == undefined) cache[x] = f(x);
        return cache[x];
    };
}