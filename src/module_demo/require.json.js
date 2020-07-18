const employees = require('../employees.json')

const results = employees
  .filter(v => v.roles !== 'Manager')
  .reduce((acc, cur) => acc + cur.salary, 0)

console.log(results)

const managers = employees.filter(v => v.roles === 'Manager')

console.log(managers)

const formattedEmployees = employees.map(v => ({
  fullName: `${v.name} ${v.lastName}`,
  ...v,
}))

console.log(formattedEmployees)

const arrowTest = employees
  .filter(v => v.age > 40)
  .map(v => ({
    age: v.age,
    text: `${v.age} ${v.name} ${v.lastName}`,
  }))
  .reduce((acc, current) => acc + current.age, 0)

console.log(arrowTest)
