const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const r = new Router()

r.get('/', ctx => {
  ctx.body = '<h1>hello Koa</h1>'
})

r.get('/api', ctx => {
  ctx.body = {
    name: 'koaname',
    lastname: 'koalastname',
  }
})

// app.use(ctx => {
//   console.log(ctx.req.url)
//   console.log(ctx.req.method)
//   ctx.body = 'hello world'
// })

app.use(r.routes())
const port = 3000
app.listen(3000, () => {
  console.log(`Server listen on port ${port}`)
})
