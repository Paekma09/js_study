var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var n = parseInt(prompt("10 이하의 숫자를 입력하세요"));
        if ( n <= 10 ) {
            resolve(n);
        } else {
            reject(`오류 : ${n}은 10 이상입니다`);
        }
    }, 1000);
});
promise
.then(function (num) {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
})
.catch(function (error) {
    console.log(error);
});