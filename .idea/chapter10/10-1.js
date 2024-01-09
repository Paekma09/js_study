/* 객체 배열을 특정 프로퍼티의 값으로 정렬하기 */
function compaireFunc(key) {
    return function (a, b) {
        return a[key] - b[key];
    };
}
var persons = [{name: "Tom", age: 17}, {name: "Huck", age: 18}, {name: "Becky", age: 16}];
persons.sort(compaireFunc("age"));  // -> (3) [{name: "Becky", age: 16}, {name: "Tom", age: 17}, {name: "Huck", age: 18}]