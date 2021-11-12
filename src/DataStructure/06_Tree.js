class Tree {
    //tree의 constructor를 구현합니다.
    //tree의 자식 노드들을 children으로 할당하여 노드의 자식 노드들을 담을 수 있게 설정합니다.
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    //tree의 자식 노드를 생성 한 후에, 노드의 children에 push해 줍니다.
    insertNode(value) {
        // new Tree 값을 만들어 value를 넣어줍니다.
      const childNode = new Tree(value);
        // 트리에 붙을 childNode를 만들고, children에 넣어야 합니다.
      this.children.push(childNode);
    }
    // tree에서 value값을 탐색합니다.
    // 현재 노드의 value 값이 찾는 값과 일치한다면 return합니다.
    contains(value) {
        // 트리안에 값이 포함되어 있는지 확인하고 일치하면 true를 리턴
      if (this.value === value) {
        return true;
      }
      // 노드가 가진 자식 노드를 순회하는 반복문으로 노드의 children 배열을 탐색합니다.
      // 값을 찾을 때 까지 children 배열을 순회하고 childNode를 탐색하세요.
      for (let i = 0; i < this.children.length; i += 1) {
        const childNode = this.children[i];
        if (childNode.contains(value)) {
          return true;
        }
      }
      // 전부 탐색했음에도 불구하고 찾지 못했다면 false를 반환합니다.
      return false;
    }
  }