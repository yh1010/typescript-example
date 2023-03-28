interface IKun {
  name: string;
  age: number;
  slogn?: string;
}

// Pick<Type, Keys>获取其他类型中的指定类型作为新类型
// 自定义Pick
type HYPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Pick
type IKun2 = Pick<IKun, "name" | "age">;
type IKun3 = HYPick<IKun, "name" | "age">;

export {};
