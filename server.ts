const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'), {})

fastify.get('/', async (request, response) => {
  return { hello: 'world' }
})

fastify.get('/fastify', async (request, response) => {
  return { hello: 'beautiful world' }
})

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
