function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    if(giftBox.length === 0){
      return false;
    }
  
    for(let i = 0; i < giftBox.length; i++){
      if(giftBox[i] === wish){
        return true;
      } else if(Array.isArray(giftBox[i])){
        let result = unpackGiftbox(giftBox[i], wish);
          if(result === true){
            return true;
          }
        }
      }
    return false;
  }
  