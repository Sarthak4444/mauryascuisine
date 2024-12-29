
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  number: { type: number, required: false },
  firstName : { type: String, required: false },
  lastName : { type: String, required: false },
  rewardPoints: { type: Number, default: 0 },
  orders: { type: Array, default: [] },
  cart: { type: Array, default: [] },
  GiftCards: { type: Array, default: [] },
  PrivateDining: { type: Array, default: [] },
  tableReservation: { type: Array, default: [] },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
