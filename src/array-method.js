const faker = require('faker')
const _ = require('lodash')
const fs = require('fs')
// const randomName = faker.name.findName()

// console.log(randomName)
const roles = ['Manager', 'Technical', 'SA', 'HR']
const employees = Array(100)
  .fill(null)
  .map(() => ({
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    age: _.random(20, 50),
    salary: _.random(20000, 50000),
    roles: roles[_.random(0, roles.length - 1)],
  }))

fs.writeFileSync(`${__dirname}/employees.json`, JSON.stringify(employees))

// console.log(employees)
