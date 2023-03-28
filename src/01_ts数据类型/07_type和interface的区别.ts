// 区别一:
//   type类型使用范围更广, 接口类型只能声明对象
type IDType = number;

interface IDInterface {
  x: number;
  y: number;
}

// 区别二:
//   interface在声明对象时, 可以再次使用相同名称进行声明;
//   type不允许两个相同的别名同时存在
interface PointType {
  x: number;
  y: number;
}
interface PointType {
  z?: number;
}

// type PointType2 = {
//   x: number;
//   y: number;
// };
// type PointType2 = {
//   z?: number;
// };

// 区别三: 接口可以继承
interface IPerson {
  name: string;
  age: number;
}

interface IKun extends IPerson {
  kouhao: string;
}

const fans: IKun = {
  name: "yyyy",
  age: 18,
  kouhao: "hahhahhah"
};

// 区别四: 可以被类实现
class Person implements IPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export {};
