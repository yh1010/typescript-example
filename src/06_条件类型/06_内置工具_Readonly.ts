interface IKun {
  name: string;
  age: number;
  slogn?: string;
}

// 自定义readonly
type HYReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Required -> 属性都变成必选项
type IKun2 = HYReadonly<IKun>;
type IKun3 = Readonly<IKun>;

export {};
