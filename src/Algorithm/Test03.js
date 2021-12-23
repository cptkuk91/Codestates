function test3(insertEdges, removeEdges) {
  // TODO: 여기에 코드를 작성하세요.
  let realEdge = [];
  console.log(realEdge);

  for (let i = 0; i < insertEdges.length; i++) {
    for (let j = 0; j < removeEdges.length; j++) {
      if (
        insertEdges[i] !== removeEdges[j] &&
        realEdge.indexOf(insertEdges[i]) === -1 &&
        removeEdges[j].reverse() !== insertEdges[i]
      ) {
        realEdge.push();
      }
    }
  }
  console.log(realEdge);
  return realEdge;
}
