// 泛型写法
function bar<Type>(arg: Type): Type {
  return arg;
}

// 完整写法
let bar1 = bar<number>(1111);
let bar2 = bar<string>("1111");
let bar3 = bar<{ name: string }>({ name: "yyyy" });

// 省略写法
let bar4 = bar(1111);
let bar5 = bar("1111");
let bar6 = bar({ name: "yyyy" });

export {};
