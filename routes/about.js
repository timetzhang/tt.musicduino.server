const router = require('koa-router')()

router.prefix('/about')

router.get('/', async (ctx, next) => {
  await ctx.render('about', {
    title: 'Hello Koa 2!'
  })
})
module.exports = router
