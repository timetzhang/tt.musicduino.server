const router = require('koa-router')()

router.prefix('/doc')

router.get('/', function (ctx, next) {
  ctx.body = 'this is21a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
