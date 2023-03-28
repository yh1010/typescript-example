interface IKun<T> {
  name: string;
  age: number;
  data: T;
}

const kunkun: IKun<string> = {
  name: "yyyy",
  age: 18,
  data: "hahhahha"
};

const kunkun2: IKun<number> = {
  name: "yyyy",
  age: 18,
  data: 1
};

// 接口泛型使用默认值
interface IKun1<T = string> {
  name: string;
  age: number;
  data: T;
}
const kunkun3: IKun1 = {
  name: "yyyy",
  age: 18,
  data: "111"
};

export {};
