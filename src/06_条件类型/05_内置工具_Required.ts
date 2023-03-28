interface IKun {
  name: string;
  age: number;
  slogn?: string;
}

// 自定义Required
type HYRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Required -> 属性都变成必选项
type IKun2 = HYRequired<IKun>;
type IKun3 = Required<IKun>;

export {};
