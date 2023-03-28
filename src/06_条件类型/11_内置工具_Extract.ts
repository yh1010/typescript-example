type IKun = "single" | "dangce" | "rap";

// Exclude<T, E>, 构造一个只包含E元素的新类型
// 自定义Exclude
type HYExclude<T, E> = T extends E ? T : never;

// Exclude
type IKun2 = Extract<IKun, "single">;
type IKun3 = HYExclude<IKun, "single">;

export {};
