// type 类型别名

// 类型组合
type groupType = number | string;
function getNum(x: groupType) {}

// 对象类型
type objectType = {
  x: number;
  y: number;
  z: number;
};
function getInfo(x: objectType) {}

// --------------------------------------------

// 接口: interface
interface IType {
  x: number;
  y: number;
  z: number;
}
function getInfo2(x: objectType) {}

export {};
