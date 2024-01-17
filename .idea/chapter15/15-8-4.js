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
promise.then(
    //처리가 성공적으로 끝났을 때 호출되는 콜백 함수
    function (num) {
        console.log(`2^${num} = ${Math.pow(2, num)}`);
    },
    //처리가 실패로 끝났을 때 호출되는 콜백 함수
    function (error) {
        console.log(error);
    }
);