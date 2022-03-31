function test2 (n, m) {
    // TODO: 여기에 코드를 작성하세요.
    function makeArr(num){
      let newArr = []
      for(let i = 1; i<=n; i++){
        newArr.push(i)
      }
      return newArr
    }
  
    let arr = makeArr(n);
    let result = [];
  
    if(m === 1){
      result = arr
    } else {
        arr.forEach((fixed, index, origin) => {
          const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; //?
          const permutations = test2(rest, m - 1); //?
          const attached = permutations.map((permutation) => [fixed, ...permutation]); //?
          result.push(...attached); //?
      });
    }
    return result;
  }

  test2(3,2); //?