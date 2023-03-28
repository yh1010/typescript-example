// 基本写法
interface IDType {
  name: string;
  age: number;
}

type ResType = boolean extends IDType ? true : false;

// 使用场景：函数的重载
function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;
function sum(num1, num2) {
  return num1 + num2;
}

// 使用条件类型
function sum2<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? number : string;
function sum2(num1, num2) {
  return num1 + num2;
}

sum2(10, 20);
// sum2(10,"qqqq") 报错
sum2("qqq", "sss");

export {};
