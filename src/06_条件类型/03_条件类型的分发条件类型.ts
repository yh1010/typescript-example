// 当泛型中使用条件类型时, 如果传入一个联合类型, 就会变成分发的
type toArray<T> = T extends any ? T[] : never;

// 此时得到的类型(string | number)[], 我们所需要的是string[]|number[]
type newType = toArray<string | number>;
