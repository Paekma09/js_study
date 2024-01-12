/* RegExp의 인수로 정규 표현식을 넘겼을 때의 동작 */
var reg = /㉾(\d{3})-(\d{3})/;
var copy = new RegExp(reg, "gi");