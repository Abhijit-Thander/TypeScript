function exampleType(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

exampleType("hello");
exampleType(20);

/////////////////////////////////////////
const add = (a: number, b: number): number => a + b;
console.log(add(10, 30));
