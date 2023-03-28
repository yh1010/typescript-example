// 函数的重载写法
// 编写函数重载签名
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

// 编写通用函数实现
function add(num1: any, num2: any): any {
  return num1 + num2;
}
console.log(add(1, 1));
console.log(add("aaa", "bbbb"));

// console.log(add({ name: "aaa" }, "bbbb")); 报错
export {};
