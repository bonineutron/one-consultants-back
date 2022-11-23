import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly lastName: string;
  readonly age: number;
  readonly birth: Date;
  readonly career: string;
  readonly semester: number;
  readonly promedio: number;
  readonly college: string;
}
