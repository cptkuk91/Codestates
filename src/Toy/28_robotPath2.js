const robotPath2 = function (room, src, sDir, dst, dDir) {
    // TODO: 여기에 코드를 작성합니다.
    // 가로와 세로의 길이
    const M = room.length;
    const N = room[0].length;
  
    // 4가지 방향 1 위쪽, 2 오른쪽, 3 아래쪽, 4 왼쪽
    const MOVES = [
      [1, -1, 0],
      [2, 0, 1],
      [3, 1, 0],
      [4, 0, -1],
    ];
  
    // 가로,세로의 범위를 벗어나는지 확인하기
    const checkValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;
  
    // 방향 설정
    const directions = [];
    // 위치별 동작의 수를 저장한다.
    const dist = [];
    for(let row = 0; row < M; row++){
      directions.push(Array(N).fill(0));
      dist.push(Array(N).fill(Number.MAX_SAFE_INTEGER));
    } // 무슨 말인지 모르겠다..
  
    // bfs 구현하기
    const queue = [];
    const enQueue = (queue, pos) => {
      queue.push(pos);
    }
    const deQueue = (queue) => {
      const pos = queue.shift();
      return pos;
    }
  
    // 출발 지점
    const [startRow, startCol] = src;
    directions[startRow][startCol] = sDir
    dist[startRow][startCol] = 0;
    // 목표 지점
    const [dRow, dCol] = dst;
    enQueue(queue, [startRow, startCol]);
  
    while(queue.length > 0){
      const[row, col] = deQueue(queue);
      const dir = directions[row][col]; // 방향
  
      for(move of MOVES){
        const [nDir, rDiff, cDiff] = move;
        // 이동 좌표
        const nRow = row + rDiff;
        const nCol = col + cDiff;
  
        // 맵을 벗어나거나, 1(장애물)을 만나면 계속 진행한다.
        if(checkValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;
  
        // 현재 위치의 방향과 이동할 방향과의 차이
        const dDiff = Math.abs(nDir - dir);
        
        let candidate;
        if(dDiff === 0){
          // 출발 후 이동점은 1로 바꿔준다.
          candidate = dist[row][col] || 1;
        } else if(dDiff === 2){
          candidate = dist[row][col] + 3;
        } else {
          candidate = dist[row][col] + 2;
        }
  
        if(nRow === dRow && nCol === dCol){
          const dDiff = Math.abs(nDir - dDir);
          if(dDiff === 0){
            candidate = candidate;
          } else if(dDiff === 2){
            candidate = candidate + 2;
          } else {
            candidate = candidate + 1;
          }
        }
        if(candidate < dist[nRow][nCol]){
          enQueue(queue, [nRow, nCol]);
          dist[nRow][nCol] = candidate // 해당 좌표에 동작수 입력
          directions[nRow][nCol] = nDir; // 해당 좌표는 방향을 입력
        }
      }
    }
    return dist[dRow][dCol]; // 동작수를 반환한다.
  };
  