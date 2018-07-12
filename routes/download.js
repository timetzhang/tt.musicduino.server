const router = require('koa-router')()

router.prefix('/download')

router.get('/', async (ctx, next) => {
  await ctx.render('download', {
    title: 'Hello Koa 2!'
  })
})
module.exports = router
