const fs = require('fs')
const path = require('path')
// stream จะ performance ดีกว่าเพราะสามารถกำหนดได้ว่าให้แปลงทีละเท่าไหร่
const url = path.join(__dirname, '..', 'employees.json')

const data = fs.createReadStream(url, {
  encoding: 'utf-8',
  highWaterMark: 10, // ตัวกำหนดจำนวน byte ให้อ่านค่า
})

const copyUrl = path.join(__dirname, 'mycopyfile.json')

const file = fs.createWriteStream(copyUrl)

data.on('data', function (chunk) {
  //   console.log(chunk)
  process.stdout.write(chunk)// อ่านเหมือน log แต่จะไม่มี \n เว้นบรรทัด
  file.write(chunk.toUpperCase())
})
