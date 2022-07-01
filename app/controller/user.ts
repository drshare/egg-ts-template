import { Controller } from 'egg';

// {app_root}/app/controller/user.js
export default class UserController extends Controller {


  // 创建用户
  async create() {
    const { ctx, service } = this;
    const UserCreateRule = {
      username: { type: 'string', required: true, allowEmpty: false, min: 5, max: 20 },
      password: { type: 'string', required: true, allowEmpty: false, min: 8, max: 32 },
    };
    // 校验参数
    ctx.validate(UserCreateRule);
    // 组装参数
    const payload = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.user.create(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }
}
