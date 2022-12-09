const { Schema } = require('mongoose');

// Message model schema
const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  text: { type: String, required: true },
  posted: { type: Date, required: true },
  userString: { type: String, required: true },
  userID: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

// Message model virtuals
MessageSchema.virtual('url').get(function () {
  return `/messages/${this.id}`;
});

module.exports = mongoose.model('Message', MessageSchema);
