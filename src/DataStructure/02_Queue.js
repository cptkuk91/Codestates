class Queue {
    constructor() {
        // 가장 앞에 있는 요소를 front
        // 가장 뒤에 있는 요소를 rear
      this.storage = {};
      this.front = 0;
      this.rear = 0;
    }
  
    size() {
        // 뒤에 들어온거에서 앞에걸 빼야 사이즈를 구할 수 있습니다.
      return this.read - this.front;
    }
      
      // 큐에 데이터를 추가 할 수 있어야 합니다.
    enqueue(element) {
        // 새롭게 들어오는 데이터를 나타내는 것이기 때문에 뒤에서 들어옵니다.
      this.storage[this.rear] = element;
      this.rear += 1;
    }
      
      // 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
    dequeue() {
      // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
      // this.size가 0일 때 return 합니다.
      if (this.size === 0) {
        return;
      }
  
      // 새로운 값이 들어올 경우 front는 더해집니다.
      const result = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
  
      return result;
    }
  }