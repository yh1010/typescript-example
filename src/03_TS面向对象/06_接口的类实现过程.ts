interface IKun {
  name: string;
  age: number;
  play: () => void;
}

// 作为定义类型
const ikun: IKun = {
  name: "qqqq",
  age: 19,
  play: function () {}
};

// 被类实现 ==> 可以多实现
class Person implements IKun {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  play() {}
}

const ikun1 = new Person("yyyy", 20);
console.log(ikun1.age, ikun1.name);
ikun1.play();

export {};
