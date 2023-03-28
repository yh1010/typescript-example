class Person {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // getters/setter
  public set name(v: string) {
    this._name = v;
  }

  public set age(v: number) {
    this._age = v;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }
}

let person = new Person("yyy", 18);
person.name = "hhhh";
person.age = 19;

console.log(person.name);
console.log(person.age);

export {};
