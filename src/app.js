import Fastify from 'fastify'


const fastify = Fastify({
  logger: true
})


fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })


fastify.listen(3000, function (err) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    else{
        console.log("server is on port 3000")
    }
})
