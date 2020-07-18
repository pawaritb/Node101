function greet() {
  console.log('hello1')
}

function greet2() {
  console.log('hello2')
}

// module.exports = { greet: greet, greet2: greet2 }
// module.exports.greet = greet
// module.exports.greet2 = greet2

exports.greet = greet
exports.greet2 = greet2
exports.greet3 = () => console.log('hello3')

// exports = { greet: greet, greet2: greet2 } ห้ามทำ//ทำไม่ได้ ต้อง mutate
