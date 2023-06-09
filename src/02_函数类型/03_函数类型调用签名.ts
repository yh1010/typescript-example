// 函数表达式
type BarType = (num1: number) => number;

// 调用签名
interface IBar {
  name: string;
  age: number;
  // 函数可以调用：函数调用签名
  (num1: number): number;
}

const bar: IBar = (num1: number): number => {
  return 123;
};

bar.name = "aaa";
bar.age = 123;
bar(134);

// 函数表达式和调用签名如何选择：
// 1.如果只是描述函数类型本身,使用函数表达式
// 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名
export {};
