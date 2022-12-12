const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fns = require('date-fns');

// Message model schema
const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  content: { type: String, required: true },
  posted: { type: Date, required: true },
  userString: { type: String, required: true },
  userID: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

// Message model virtuals
MessageSchema.virtual('url').get(function () {
  return `/messages/${this.id}`;
});

MessageSchema.virtual('posted_formatted').get(function () {
  return `${fns.formatDistanceToNow(this.posted)} ago`;
});

module.exports = mongoose.model('Message', MessageSchema);
