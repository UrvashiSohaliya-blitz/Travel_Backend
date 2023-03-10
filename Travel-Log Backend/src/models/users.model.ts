import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
     type: Number,
    required: true,
  },
  isDeleted:{type:Boolean, default: false}

});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
