interface IKun {
  name: string;
  age: number;
}

interface ICoder {
  name: string;
  coding: () => void;
}

//两种类型同时满足
const info: IKun & ICoder = {
  name: "yyyy",
  age: 18,
  coding: function () {
    console.log("hhhhh");
  }
};

export {};
