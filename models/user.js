const { Schema } = require('mongoose');

// User model schema
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  joined: { type: Date, required: true },
  posts: [],
  admin: { type: Boolean },
});

// User model virtuals
UserSchema.virtual('url').get(function () {
  return `/user/${this.id}`;
});

module.exports = mongoose.model('User', UserSchema);
