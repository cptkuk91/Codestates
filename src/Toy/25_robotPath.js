const robotPath = function (room, src, dst) {
    // TODO: 여기에 코드를 작성합니다.
    // 행과열, 현재 위치, count가 필요하다.
    const aux = (M, N, cur, count) => {
        const [row, col] = cur;
    
        // 배열의 범위를 벗어난 경우
        if(row < 0 || row >= M || col < 0 || col >= N) return;

        // 목적지 까지 도달하는 공식
        if(room[row][col] === 0 || room[row][col] > count){
            room[row][col] = count;
        } else {
            // 진행할 수 없는 경우 return 한다.
            return;
        }

        aux(M, N, [row + 1, col], count + 1); // 상
        aux(M, N, [row - 1, col], count + 1); // 하
        aux(M, N, [row, col - 1], count + 1); // 좌
        aux(M, N, [row, col + 1], count + 1); // 우
    }
    // 로봇이 방문한 곳을 1로 변경 해 재방문을 막는다.
    aux(room.length, room[0].length, src, 1);
    const [r,c] = dst;
    return room[r][c] - 1;
    // 목적지 까지 도달하는 공식과 const[r,c] = dst, return[r][c] -1에 대해서 알아볼 필요가 있다.
};
  