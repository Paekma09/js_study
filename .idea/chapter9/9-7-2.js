/* 확장 방지 : Object.preventExtensions 메서드 */
var person = { name: "Tom" };
Object.preventExtensions(person);
person.age = 17;
console.log("age" in person);   // -> false
console.log(Object.isExtensible(person));   // -> false