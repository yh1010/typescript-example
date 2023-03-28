// 自定义声明一个lodash.join方法
// 声明模块
declare module "lodash" {
  export function join(...args: any[]): any;
}

// 自定义类型声明
declare const name1: string;
declare const age1: number;
declare const height1: string;

// 自定义函数声明
declare function fcc(bar: string): string;

// 自定义类声明
declare class Person {
  name2: string;
  age2: number;
  constructor(name2: string, age2: number) {}
}

// 声明文件模块
declare module "*.jpg";
declare module "*.svg";

// 声明命名空间
// 使用场景：比如需要在src中引入jquery CDN, 就需要声明命名空间
// declare namespace $ {
//   export function ajax(settings: any): any;
// }
