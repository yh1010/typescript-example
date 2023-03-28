// 方案一: 函数类型表达式
// 格式 (参数列表) => 返回值类型
type BarType = (num: number) => number;
const bar: BarType = (arg: number): number => {
  return 123;
};

export {};
