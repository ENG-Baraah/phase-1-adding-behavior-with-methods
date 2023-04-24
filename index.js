// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says woof!`;
  }
}
// speak returns "It's me! name, the parrot!".
//  If it is not male, speak returns "name says squawk!"
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
      if(this.sex==="male")
        return `It's me! ${this.name}, the parrot!`;
      if(this.sex==="female")
        return `${this.name} says squawk!`;
  }
}
let cat = new Cat("Sasha", "female");
cat.speak();
let dog = new Dog("Rufio", "male");
dog.speak();
let bird = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")
bird.speak();
bird2.speak();