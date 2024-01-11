/* throw 문 */
function permutation(a) {
    if ( !(a instanceof Array) ) {
        throw new Error(a + " is not an array");
    }
    // 순열 목록(list)을 각 순열의 요소(element)로 추가하면서 갱신해 나간다
    return a.reduce(function (list, element) {
        var newList = [];   // 이 배열에 새로운 순열 목록을 저장함
        // 각 순열(seq)별로 처리
        list.forEach(function (seq) {
            // seq 배열 끝에서 두 번째 요소부터 앞에서 두 번째 요소에 이르기까지 차례대로 element를 삽입한다. 그 후에 각각을 newList에 추가한다
            for (var i=seq.length; i>=0; i--) {
                var newSeq = [].concat(seq);    // newSeq에 seq의 복사본을 저장
                newSeq.splice(i, 0, element);   // newSeq의 i번째 요소 앞에 element를 삽입
                newList.push(newSeq);   // newSeq을 newList의 끝에 추가
            }
        });
        return newList; // 새로운 순열 목록을 다음 요소로 전달
    }, [[]]/* 초기값은 빈 배열이 저장된 배열 */);
}
permutation("ABC");