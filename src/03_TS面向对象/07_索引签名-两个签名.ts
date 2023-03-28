interface ICollection {
  // 两个索引签名
  [index: number]: string;
  [key: string]: any;

  // 错误写法: 数字类型索引的类型，必须是字符串类型索引的类型的子类型
  // 原因: 所有的数字类型都是会转成字符串类型去对象中获取类型
  // [index: number]: any;
  // [key: string]: string;
}

const name: ICollection = ["111", "222", "333"];
const item = name[0];
const foreachFn = name["foreach"];

export {};
