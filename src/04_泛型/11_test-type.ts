// 定义函数的调用签名
interface IFCall<IRoot> {
  <T>(fn: (num: IRoot) => T, age: number): T;
}

// 定义函数对象
const foo: IFCall<number> = function (fn, age) {
  return fn(111);
};

// 调用函数
foo<string>(() => {
  return "aaaa";
}, 18);

// 不传入明确的调用时的泛型，类型推断
const res = foo((aaa) => {
  return "aaaa";
}, 19);
console.log(res);
