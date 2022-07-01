import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/user/create', controller.user.create);
  router.post('/login', controller.login.index);
};
