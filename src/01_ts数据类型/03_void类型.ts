// 1.应用于函数/对象
type FooType = () => void;
const foo: FooType = () => {};

// 举例说明：
// 1.定义要求传入的函数类型
type ExecFnType = (...args: any[]) => void;

// 2.定义一个函数, 并且接受参数也是一个函数,而且这个函数的类型必须是ExecFnType
function delayExecFn(fn: ExecFnType) {
  setTimeout(() => {
    fn("yyyy", 18);
  }, 1000);
}

// 执行上述函数, 并传入一个匿名函数
delayExecFn((name, age) => {
  console.log(name, age);
});
