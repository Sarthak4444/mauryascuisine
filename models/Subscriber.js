



import mongoose from 'mongoose';

const SubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name : { type: String, required: true },
});

const Subscriber = mongoose.models.Subscriber || mongoose.model('Subscriber', SubscriberSchema);

export default Subscriber;
