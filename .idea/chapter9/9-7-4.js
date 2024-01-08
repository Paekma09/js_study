/* 동결 : Object.freeze 메서드 */
var person = { name: "Tom" };
Object.freeze(person);
console.log(Object.isFrozen(person));   // -> true