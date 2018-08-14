const Koa = require('koa')
const app = new Koa()

const React = require('react')
// const ReactDOMServer = require('react-dom/server.js')

// const RApp = React.createFactory(require('./App.js'))

app.use(async ctx => {
  ctx.body = 'hello wrold'
})

app.listen(3000, () => {
  console.log('server is running at 3000')
})