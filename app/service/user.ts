import { Service } from 'egg';

export default class UserService extends Service {
  async create(payload) {
    const { ctx } = this;
    return ctx.model.User.create(payload);
  }

  async find(id) {
    return this.ctx.model.User.findById(id);
  }

  async findByName(username) {
    return this.ctx.model.User.findOne({ username });
  }

  async destroy(_id) {
    const { ctx } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    return ctx.model.User.findByIdAndRemove(_id);
  }

  async update(_id, payload) {
    const { ctx } = this;
    const user = await ctx.service.user.find(_id);
    if (!user) {
      ctx.throw(404, 'user not found');
    }
    return ctx.model.User.findByIdAndUpdate(_id, payload);
  }

}
