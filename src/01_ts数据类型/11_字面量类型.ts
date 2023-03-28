// 基本使用
let message: "Hello World" = "Hello World";

type Direction = "left" | "right" | "top" | "down";
const d1: Direction = "left";

// 栗子: 封装请求方法
type MethodType = "GET" | "POST";

function request(url: string, method: MethodType) {
  console.log(url, method);
}

request("http://localhost/api", "GET");

// TS细节
const info = {
  url: "xxxx",
  method: "POST"
};

// 报错: info.method 获取的string类型, string类型无法赋值给字面量类型
// request(info.url, info.method);

// 解决方案一：info.method进行类型断言
request(info.url, info.method as "POST");

// 解决方案二：直接让info对象类型是一个字面量类型
const info1: { url: string; method: "POST" } = {
  url: "xxxx",
  method: "POST"
};
request(info1.url, info1.method);

const info2 = {
  url: "xxxx",
  method: "POST"
} as const;
request(info2.url, info2.method);
export {};
