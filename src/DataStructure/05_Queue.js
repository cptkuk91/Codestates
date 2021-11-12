function queuePrinter(bufferSize, capacities, documents) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    // 큐에 bufferSize만큼 0을 삽입합니다. 
    for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }

    // documents 배열에서 제일 앞의 있는 요소를 하나 빼 currentDocument에 할당
    let currentDocument = documents.shift();

    // queue의 제일 앞에 currentDocument를 삽입하고, 제일 마지막 요소를 없앰
    queue.unshift(currentDocument);
    queue.pop();

    // totalBufferVolume(총 용량)에 currentDocument의 크키를 합쳐줍니다.
    totalBufferVolume += currentDocument;

    // 1초가 지나면 count를 증가시켜줍니다.
    count++;

    // totalBufferVolume이 존재하는 한 계속해서 반복합니다.
    while(totalBufferVolume){
        // 총 용량에 queue에 있는 마지막 요소의 용량을 제거합니다.
        totalBufferVolume -= queue.pop();

        // document 배열에서 요소를 빼내 currentDocument에 할당합니다.
        currentDocument = documents.shift();

        if(currentDocument + totalBufferVolume <= capacities){
            // queue에 currentDocument를 삽힙하고 totalBufferVolume에 currentDocument 용량을 추가합니다.
            queue.unshift(currentDocument);
            totalBufferVolume += currentDocument;
        } else {
            // documents에 currentDocument를 집어넣고 queue에는 0을 삽입합니다.
            documents.unshift(currentDocument);
            queue.unshift(0);
        }
        // 반복 할 때 마다 count를 올립니다.
        count++
    }
    return count;
}