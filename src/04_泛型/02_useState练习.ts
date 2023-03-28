// 元组: useState函数
function state<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState;
  function setState(newState: T) {
    state = newState;
  }
  return [state, setState];
}

const [count, setCount] = state<number>(100);
const [message, setMessage] = state("hello world");
const [banner, setBanner] = state<any[]>([]);

export {};
