function say(greetings,honorifics) {
    console.log(greetings + " " + honorifics + this.name);
}
var tom = { name: "Tom Sawyer" };
var becky = { name: "Becky thatcher" };
say.apply(tom, ["Hello!", "Mr."]);   // -> "Hello! Mr.Tom Sawyer"
say.apply(becky, ["Hi!", "Ms."]);    // -> "Hi! Ms.Becky thatcher"
say.call(tom, "Hello!", "Mr.");   // -> "Hello! Mr.Tom Sawyer"
say.call(becky, "Hi!", "Ms.");  // -> "Hi! Ms.Becky thatcher"
var sayToTom = say.bind(tom);
sayToTom("Hello!", "Mr.");  // -> "Hello! Mr.Tom Sawyer"