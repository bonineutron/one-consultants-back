import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  birth: { type: Date, required: true },
  career: { type: String, required: true },
  semester: { type: Number, required: true },
  promedio: { type: Number, required: true },
  college: { type: String, required: true }
});
