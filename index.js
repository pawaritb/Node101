const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello World update feature!!</h1>')
  } else if (req.url === '/api') {
    const data = { name: 'myname', lastname: 'mylastname' }
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  } else if (req.url === '/person' && req.method === 'POST') {
    console.log('insert person to db')
  }
})

server.listen(3000, () => {
  console.log('Server listen on port 3000')
})
