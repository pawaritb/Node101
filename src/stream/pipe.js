const fs = require('fs')
const path = require('path')
const { Transform } = require('stream')
const { createGzip } = require('zlib')

const url = path.join(__dirname, '..', 'employees.json')

const readable = fs.createReadStream(url, {
  encoding: 'utf-8',
  highWaterMark: 10, // ตัวกำหนดจำนวน byte ให้อ่านค่า
})

const newfileUrl = path.join(__dirname, 'mycopyfile2.json')

const writeable = fs.createWriteStream(newfileUrl)

const upperCastTransform = new Transform({
  transform: (chunk, encoding, done) => {
    const result = chunk.toString().toUpperCase()
    done(null, result)
  },
})

const archive = createGzip()
const zipFile = path.join(__dirname, 'myfile.gz')
const zipWriteable = fs.createWriteStream(zipFile)

readable.pipe(upperCastTransform).pipe(writeable)
readable.pipe(upperCastTransform).pipe(archive).pipe(zipWriteable)
