import {Router} from 'restify-router';

const routerProfileInstance = new Router();

routerProfileInstance.get('/:id', async (req, res) => {
  try {
    return res.json(req.params);
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});


export default routerProfileInstance;
