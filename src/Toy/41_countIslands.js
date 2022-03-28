const countIslands = function (grid) {
    // TODO: 여기에 코드를 작성합니다.
    const Row = grid.length;
    const Col = Row && grid[0].length;
    let count = 0;
  
    function SearchIsland(i, j){
      if(i < 0 || j < 0 || i >= Row || j >= Col) return;
      if(grid[i][j] === '0') return;
      grid[i][j] = '0';
      SearchIsland(i - 1, j);
      SearchIsland(i + 1, j);
      SearchIsland(i, j - 1);
      SearchIsland(i, j + 1);
    }
  
    for(let i = 0; i < Row; i++){
      for(let j = 0; j < Col; j++){
        if(grid[i][j] === '0') continue;
        count++;
        SearchIsland(i, j);
      }
    }
    return count;
  };
  