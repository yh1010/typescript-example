type MapIPerson<T> = {
  -readonly [property in keyof T]-?: T[property]; // -符号用于去除readonly 可选修饰符
};

interface IPerson {
  name: string;
  age: number;
}

type cloneIPerson = MapIPerson<IPerson>;

export {};
