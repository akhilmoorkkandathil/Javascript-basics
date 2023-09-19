function sayHello() {
    console.log(this)
    console.log(`Hello, ${this.name}!`);
  }
  const obj = { name: 'John' };
  
  sayHello.call(obj); // Output: Hello, John!
  sayHello.apply(obj,[3,4,5]); // Output: Hello, John!
  

  