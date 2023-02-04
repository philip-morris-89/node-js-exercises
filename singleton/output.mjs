class singletonPattern {
  output(value) {
    console.log(`Hello, ${value}`);
  }
}

export const singletonPatternInstance = new singletonPattern();

singletonPatternInstance.output("Philip Morris");
