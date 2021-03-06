'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Message Schema
 */
var MessageSchema = new Schema({
  from_user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  to_user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: '',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  type: {
    type: String,
    default: 'user'
  },
  _replies: [this],

  from_status: {
    type: Number,
    default: 0      //0 unread, 1 already read
  },
  to_status: {
    type: Number,
    default: 0      //0 unread, 1 already read
  },
  createdat: {
    type: Date,
    default: Date.now
  },
  updatedat: {
    type: Date,
    default: Date.now
  }
});


mongoose.model('Message', MessageSchema);
