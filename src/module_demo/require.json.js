const _ = require('lodash')
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

const employeesGroupByRole = _.groupBy(employees, 'roles')

// console.log(employeesGroupByRole)
const summary = _.map(employeesGroupByRole, (v, k) => ({
  role: k,
  sumSaraly: _.sumBy(v, 'salary'),
//   sumSaraly: v.reduce((acc, cur) => acc + cur.salary, 0), //แบบไม่ใช้ lodash ช่วย
}))

console.log(summary)

// const result = [
//     {
//         role: 'Technical',
//         sumSaraly: 200000,
//     },
//     ..._.
// ]
