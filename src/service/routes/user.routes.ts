import {Router} from 'restify-router';

const routerUserInstance = new Router();

const localData = [{
  id: 1,
  profile: {
    name: 'Cristhian',
    lastName: 'H.',
  },
},
{
  id: 2,
  profile: {
    name: 'Fernando',
    lastName: 'Z.',
  },
},
{
  id: 3,
  profile: {
    name: 'Alvaro',
    lastName: 'B.',
  },
}];

routerUserInstance.get('/resolveById', async (req, res) => {
  try {
    const {profileId} = req.query;
    const profileElement = localData
        .find((el)=> String(el.id) === String(profileId));
    if (!profileElement) {
      throw new Error('Elemento no existe');
    };
    return res.json(profileElement);
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return res.json({success: false, error: true, message: errorMessage});
  }
});


export default routerUserInstance;
