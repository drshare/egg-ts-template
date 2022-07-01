import { Controller } from 'egg';

export default class LoginController extends Controller {
  async index() {
    const { ctx, service } = this;
    const UserCreateRule = {
      username: { type: 'string', required: true, allowEmpty: false, min: 5, max: 20 },
      password: { type: 'string', required: true, allowEmpty: false, min: 8, max: 32 },
    };
    ctx.validate(UserCreateRule);
    const payload = ctx.request.body;
    // 调用 Service 进行业务处理
    const userinfo = await service.user.findByName(payload.username);
    if (userinfo.password === payload.password) {
      ctx.helper.success({ ctx, msg: '登录成功！', code: 200 });
    } else {
      ctx.helper.success({ ctx, msg: '登录失败！' });
    }
    // 设置响应内容和响应状态码
  }
}
