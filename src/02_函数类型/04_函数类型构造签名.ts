class Person {}

interface IPerson {
  new (): Person;
}

function factory(fn: IPerson) {
  const f = new fn();
  return f;
}

factory(Person);

export {};
