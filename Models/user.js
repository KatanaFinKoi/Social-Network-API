import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match a valid email address'],
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', 
      },
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

const User = model('User', userSchema);
export default User;
