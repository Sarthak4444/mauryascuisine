


import mongoose from 'mongoose';

const PrivateReservationSchema = new mongoose.Schema({
    email: { type: String, required: true, },
    number: { type: String, required: true, },
    name : { type: String, required: true, },
    occasion: { type: String, required: false, },
    note: { type: String, required: false, },
    people: { type: Number, required: true, },
    date: { type: String, required: true, },
    time: { type: String, required: true, },
});

const PrivateReservation = mongoose.models.PrivateReservation || mongoose.model('PrivateReservation', PrivateReservationSchema);

export default PrivateReservation;
