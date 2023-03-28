// 使用类型断言
const imgEl = document.querySelector(".img") as HTMLImageElement;
imgEl.src = "yyy";
imgEl.alt = "hhhhh";

// 类型断言规则: 断言只能断言成更加具体的类型, 或者不太具体的类型(any/unknown)
const age: number = 18;

// 错误做法
//const age1 = age as string;

// 正确做法 --- 不推荐这样做
const age2 = age as any;
const age3 = age2 as string;

export {};
