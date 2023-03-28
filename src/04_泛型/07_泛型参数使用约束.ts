//keyof
interface IKun {
  name: string;
  age: number;
}

type type = keyof IKun; //返回 "name"|age 联合类型

// 传入的key类型, 是obj当中的其中一个
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const info = {
  name: "yyyy",
  age: 18,
  height: 1.88
};

getObjectProperty(info, "name");
// getObjectProperty(info, "address"); 报错;不存在该属性

export {};
