import fastify from "fastify"
import cors    from "fastify-cors"

const server = fastify({logger: true})

server.register(cors)

server.get('/', async (request, response) => ({ hello: 'world' }))

server.listen(process.env.PORT || 3000, process.env.MODE === 'DEV' ? "0.0.0.0" : "127.0.0.1", (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})
