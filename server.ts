const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'), {})

fastify.get('/', async (request, response) => ({ hello: 'world' }))

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
