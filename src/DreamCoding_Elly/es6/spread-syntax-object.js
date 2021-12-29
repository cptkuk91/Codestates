const item = { type: 'blue', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M'};

// Bad Code
item['price'] = detail.price;
console.log(item);
// item에 detail price가 추가된다.

// Bade Code
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;
console.log(newObject);

// Good Code
const newObject2 = Object.assign(item, detail);
console.log(newObject2);

// Good Code
// price key update가 가능하다.
const newObject3 = {...item, ...detail, price: 40};
console.log(newObject3);

