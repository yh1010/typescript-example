type MapIPerson<T> = {
  // 索引签名
  [property in keyof T]: T[property];
};

interface IPerson {
  name: string;
  age: number;
}

// 拷贝一份IPerson
type cloneIPerson = MapIPerson<IPerson>;

export {};
