import fastify from "fastify";

const server = fastify({logger: true})

server.register(require('fastify-cors'), {})

server.get('/', async (request, response) => ({ hello: 'world' }))

server.listen(3000, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
