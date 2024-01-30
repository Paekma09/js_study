/* 워커와 메인 스레드의 처리 비교하기 */
importScripts("prime.js");

onmessage = function (e) {
    console.log("worker: message recieved");
    var message = e.data;
    var n = parseInt(message);
    postMessage(prime(n));
};