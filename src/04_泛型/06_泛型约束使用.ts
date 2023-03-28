interface ILength {
  length: number;
}

function getLength(args: ILength) {
  return args;
}

// 会改变参数的类型
const const1 = getLength("aaaa");
const const2 = getLength(["aaaa", "bbbb"]);
const const3 = getLength({ length: 100 });

// T相当于一个变量，用于记录本次调用的类型，所以在整个函数的执行周期中,一直保留参数的类型
function getLength2<T extends ILength>(args: T): T {
  return args;
}
const const4 = getLength2("aaaa");
const const5 = getLength2(["aaaa", "bbbb"]);
const const6 = getLength2({ length: 100 });

export {};
