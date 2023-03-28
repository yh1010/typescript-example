class Person {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person("yyy", 18);
// person.name = "1111" // 报错:只读属性不可以设值
export {};
