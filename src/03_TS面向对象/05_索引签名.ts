interface ICollection {
  // 索引签名
  [index: string]: number;
  length: number;
}

const names: number[] = [111, 222, 333];

function iterator(collection: ICollection) {
  console.log(collection[0]);
  console.log(collection[1]);
}

//iterator(names);

iterator({ name: 111, age: 111, length: 10 });

export {};
