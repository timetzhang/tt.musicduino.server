const router = require('koa-router')()

router.prefix('/course')

router.get('/', async (ctx, next) => {
  await ctx.render('course', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
