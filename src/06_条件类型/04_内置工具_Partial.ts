interface IKun {
  name: string;
  age: number;
  slogn?: string;
}

// 自定义Partial
type HYPartial<T> = {
  [P in keyof T]?: T[P];
};

// Partial -> 属性变成可选
type IKunPartial = HYPartial<IKun>;
type IKunPartial2 = Partial<IKun>;

export {};
