import restify from 'restify';
import logger from 'morgan';
import PrincipalRouter from '../routes';

const server = restify.createServer({
  name: process.env.SERVICE_NAME || 'service-name',
  version: process.env.SERVICE_VERSION || '1.0.0',
});

server.use(logger('dev'));

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
PrincipalRouter.applyRoutes(server);

export {
  server,
};
