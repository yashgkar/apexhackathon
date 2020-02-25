const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    people: {
        type: Number,
        required: true
    },
    plan: {
        type: String,
        required: true
    }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;