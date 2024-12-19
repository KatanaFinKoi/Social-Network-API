import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(), 
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    email: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(), 
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  })


const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleString(),
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema], 
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );  
  

  thoughtSchema.virtual('reactionCount').get(function find() {
    return this.reactions.length;
  });
  
  const Thought = model('Thought', thoughtSchema);
  export default Thought;
  