// const person = {
//   name: 'name',
//   lastName: 'lastName',
//   greet: function () {
//     console.log(`My name is ${this.name} ${this.lastName}`)
//   },
// }

// person.greet()
// console.log(person)

// function Person(name, lastName) {
//   this.name = name
//   this.lastName = lastName
// }

// Person.prototype.greet = function () {
//   console.log(`My name is ${this.name} ${this.lastName}`)
// }

// const person1 = new Person('John', 'Doe')
// const person2 = new Person('Jane', 'Doe')

// person1.greet()
// person2.greet()

class Person {
  constructor(name, lastName) {
    super()
    this.name = name
    this.lastName = lastName
  }
}
