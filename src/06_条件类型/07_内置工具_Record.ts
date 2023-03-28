// Record<Keys, Type>
// Record用于构造一个对象类型，它所有的key都是keys类型，它所有的value都是Type类型
interface IKun {
  name: string;
  age: number;
  slogn?: string;
}

type keys = keyof IKun; // name | age | slogn
type Res = keyof any; // string | number | symbol

// 自定义Record
// 确定K一定是可以作为IKunAdress的联合类型
type HYRecord<K extends keyof any, V> = {
  [P in K]: V;
};

type IKunAdress = "北京" | "上海" | "南昌";
type IKun1 = Record<IKunAdress, IKun>;
type IKun2 = HYRecord<IKunAdress, IKun>;
const IKun1: IKun1 = {
  北京: {
    name: "uuu",
    age: 18
  },
  南昌: {
    name: "yyy",
    age: 18
  },
  上海: {
    name: "yyy",
    age: 18
  }
};

export {};
