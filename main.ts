import Fastify from 'npm:fastify'


const fastify = Fastify({
  logger: true
})

fastify.get('/', function handler (request, reply) {
  return { hello: 'world' }
})

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  Deno.exit(1)
}