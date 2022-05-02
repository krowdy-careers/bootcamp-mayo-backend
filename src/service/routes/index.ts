import {Router} from 'restify-router';
import ProfileRoute from './profile.routes';


const routerInstance = new Router();
const listOfRouter = new Router();

listOfRouter.add('/profile', ProfileRoute);


routerInstance.add('/api/v1', listOfRouter);


export default routerInstance;
