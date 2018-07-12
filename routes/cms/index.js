const router = require('koa-router')()

router.prefix('/cms')

router.get('/', async (ctx, next) => {
  await ctx.render('cms/index', {
    title: 'Hello Koa cms!'
  })
})
module.exports = router
