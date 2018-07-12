const router = require('koa-router')()

router.prefix('/doc')

router.get('/', async (ctx, next) => {
  await ctx.render('doc', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
