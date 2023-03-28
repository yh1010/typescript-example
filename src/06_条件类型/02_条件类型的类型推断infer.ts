type CalcFnType = (num1: number, num2: number) => number;

function foo1() {
  return "abc";
}

// 自定义获取函数的返回值类型
type MYReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

// 获取参数类型
type MYParamType<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type CalcReturnType1 = ReturnType<CalcFnType>;
type CalcReturnType2 = MYReturnType<CalcFnType>;
type fooReturnType = MYReturnType<typeof foo1>;
// type fooReturnType2 = MYReturnType<boolean>;  报错

type CalcParamType = MYParamType<CalcFnType>;

export {};
