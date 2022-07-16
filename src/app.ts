import fastify from 'fastify'
import { FastifyReplyType, FastifyRequestType } from 'fastify/types/type-provider'
import { logger } from './helpers/logger'

const server = fastify({
  logger: {
    level: 'error',
  }
})

server.register(require('@fastify/cors'), {
  origin: '*',
})

server.get('/ping', async (_request: FastifyRequestType, _reply: FastifyReplyType) => {
  return {
    data: 'pong\n'
  }
})

server.listen({ port: 8080 }, (err: Error | null, address: string) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  logger.info(`Server listening at ${address}`)
})