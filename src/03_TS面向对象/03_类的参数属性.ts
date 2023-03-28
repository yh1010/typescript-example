class Person {
  // 语法糖 不用定义额外定义属性
  constructor(public name: string, private age: number) {}
}

let person = new Person("yyy", 18);
person.name = "hhh";
export {};
