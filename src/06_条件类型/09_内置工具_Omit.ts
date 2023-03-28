interface IKun {
  name: string;
  age: number;
  slogn?: string;
}

// Omit<Type, Keys>过滤指定类型中keys, 得到一个新的类型
// 自定义Omit
type HYOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

// Omit
type IKun2 = Omit<IKun, "name" | "age">;
type IKun3 = HYOmit<IKun, "name" | "age">;

export {};
