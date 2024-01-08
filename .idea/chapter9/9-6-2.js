/* Object.keys 메서드 */
var group = { groupName: "Tennis circle" };
var person = Object.create(group);
person.name = "Tom";
person.age = 17;
person.sayHello = function () {
    console.log("Hello! " + this.name);
};
Object.defineProperty(person, "sayHello", { enumerable: false});
console.log(Object.keys(person));   // -> [ "name", "age" ]
console.log(Object.getOwnPropertyNames(person));    // -> [ "name", "age", "sayHello" ]

var p = Object.keys(obj);
for (var i=0; i<p.length; i++) {
    console.log(obj[p[i]]);
}