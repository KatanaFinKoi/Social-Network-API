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
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


userSchema
  .virtual('fullName')
  // Getter
  .get(function find(){
    return `${this.first} ${this.last}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });

const User = model('User', userSchema);
export default User;
