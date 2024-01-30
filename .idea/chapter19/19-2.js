/* Blob 데이터를 내려받는 함수 */
function getBlob(url, callback) {
    var req = new XMLHttpRequest();
    req.onload = function () {
        callback(req.response);
    };
    req.open("GET", url);
    req.responseType = "blob";
    req.send(null);
}