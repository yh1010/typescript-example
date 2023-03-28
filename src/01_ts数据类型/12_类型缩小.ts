// 常用的类型缩小方式
// ===, typeof, instanceof, in

// 前三个省略, 着重练习in
// in 判断是否具有某个属性
interface ISwim {
  swim: () => void;
}

interface IRun {
  run: () => void;
}

function move(animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim();
  } else if ("run" in animal) {
    animal.run();
  } else {
    throw new Error("方法错误");
  }
}

const fish: ISwim = {
  swim: () => {}
};
const dog: IRun = {
  run: function () {}
};

move(fish);
move(dog);

export {};
