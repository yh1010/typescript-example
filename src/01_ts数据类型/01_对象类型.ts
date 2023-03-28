// 对象类型和函数类型结合使用
type point = { x: number; y: number };
function printCoordinate(params: point) {
  console.log(params.x);
  console.log(params.y);
}

// 可选类型
type point1 = { x: number; y?: number };
function printCoordinate1(params: point1) {
  console.log(params.x);
  console.log(params.y);
}

printCoordinate1({ x: 10, y: 11 });
printCoordinate1({ x: 10 });

printCoordinate({ x: 10, y: 11 });
export {};
