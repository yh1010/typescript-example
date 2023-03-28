let foo: unknown = "abc";
//console.log(foo.length); //报错

// unknown类型默认情况下在上面进行任何操作是非法的,
// 要求必须进行类型的校验(类型缩小), 才能进行对应操作
if (typeof foo === "string") {
  console.log(foo.length);
}

// any类型
let fcc: any = "bac";
console.log(fcc.length);

// unknown和any区别：any在默认情况下在类上做任何操作都是合法的
export {};
