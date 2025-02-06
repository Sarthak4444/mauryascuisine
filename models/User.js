
import mongoose from 'mongoose';
import PrivateReservation from './PrivateReservation';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  number: { type: String, required: false },
  name : { type: String, required: false },
  rewardPoints: { type: Number, default: 0 },
  orders: { type: Array, default: [] },
  cart: { type: Array, default: [] },
  giftCards: { type: Array, default: [] },
  privateReservation: { type: Array, default: [] },
  tableReservation: { type: Array, default: [] },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
