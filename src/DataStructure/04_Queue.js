function paveBox(boxes) {
    // TODO: 여기에 코드를 작성합니다.
    let result = []; // 숫자를 담아줄 배열을 만든다. 이건 테스트 해보기를 통해서 알았다.
  
    // 박스의 배열이 0보다 클 때까지 계속 반복해줍니다.
    while(boxes.length > 0){
        // findIndex를 통해 biggerThan을 활용합니다.
        let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
        // 여기서 fn이 뜻하는 건 무엇일까?

        // findIndex에서 -1은 만족하는 요소가 없음을 뜻한다.
        if(finishIndex === -1){
            // 만족하는 요소가 없기 때문에 result에 boxes의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제 합니다.
            result.push(boxes.length);
            boxes.splice(0, boxes.length); // slice 0~box의 길이를 통해 내부 요소를 전부 삭제
        } else {
            // 만족하는 요소가 있을 경우 해당 인덱스를 result에 넣어주고, box의 길이를 그만큼 제외해주면 됩니다.

            // 만족하는 요소의 값은 finishIndex
        }
    }
  }