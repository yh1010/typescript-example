interface IPerson {
  name: string;
  age: number;
  friends?: {
    name: string;
  };
}

const info: IPerson = {
  name: "yyy",
  age: 18
};

// 访问属性: 可以用可选链
console.log(info.friends?.name);

// 设置属性:
// 方案一: 类型缩小
if (info.friends) {
  info.friends.name = "hhhhh";
}

// 方案二: 非空类型断言
//        必须确保friends有值
info.friends!.name = "aaaa";

export {};
