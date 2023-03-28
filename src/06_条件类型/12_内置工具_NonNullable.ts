// NonNullable<Type> 构造一个类型，这个类型从Type中排除所有的null, undefined类型
type IKun = "single" | "dangce" | "rap" | null | undefined;

// Exclude<T, E>, 构造一个只包含E元素的新类型
// 自定义Exclude
type HYNonNullable<T> = T extends null | undefined ? never : T;

// Exclude
type IKun2 = NonNullable<IKun>;
type IKun3 = HYNonNullable<IKun>;

export {};
