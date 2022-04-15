import Fastify from 'fastify';
import MongoDBbooks from '../config/db.js';


const fastify = Fastify({
  logger: true
})


fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })


const start = async()=>{
    try{
        fastify.listen(3000);
        MongoDBbooks.initialize();
    }
    catch(error){
        fastify.log.error(err)
        process.exit(1)
    }
}
start();
