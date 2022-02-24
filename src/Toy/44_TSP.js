// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.floor(dist * 100);
}

const TSP = function (places) {
  // TODO: 여기에 코드를 작성합니다.
  let minDistance = Number.MAX_VALUE;
  // 몇개의 도시가 있는지 확인해야한다.
  let countCity = places.length;
  // 방문을 한 도시를 체크하면서 진행한다.
  function visitedCity(lastVisited, visited, totalDist, visitNum) {
    if (visitNum === countCity) {
      if (minDistance > totalDist) {
        minDistance = totalDist;
      }
      return;
    }
    visited.forEach((value, idx) => {
      if (value === false) {
        //방문하지 않은 도시를 체크하면서 거리를 구한다.
        let distToNext = calculateDistance(places[lastVisited], places[idx]);
        visited[idx] = true;
        visitedCity(idx, visited, totalDist + distToNext, visitNum + 1);
        visited[idx] = false;
      }
    });
    // 방문한 곳의 거리를 구한 결과 값을 알아보자.
    const visited = Array(countCity).fill(false);
    places.forEach((_, idx) => {
      visited[idx] = true;
      visitedCity(idx, visited, 0, 1);
      visited[idx] = false;
    });
  }
  return minDistance;
};
