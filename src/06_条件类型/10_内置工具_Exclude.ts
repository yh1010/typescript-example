type IKun = "single" | "dangce" | "rap";

// Exclude<T, E>, 构造一个排除E元素的新类型
// 自定义Exclude
type HYExclude<T, E> = T extends E ? never : T;

// Exclude
type IKun2 = Exclude<IKun, "single">;
type IKun3 = HYExclude<IKun, "single">;

export {};
