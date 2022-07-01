// {app_root}/app/model/user.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username: { type: String, min: 5, max: 20, required: true },
    password: { type: String, min: 8, max: 32, required: true },
    avatar: { type: String, default: 'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm' },
    createdTime: { type: Date, default: Date.now },
  });
  return mongoose.model('User', UserSchema);
};

