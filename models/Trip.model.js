const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
    {
        origin: {
            type: {
                type: String,
            },
            locationOrigin: {
                type: { type: String },
                coordinates: [Number]
            },
            required: [true, 'Please include the origin of your trip'],
        },

        destination: {
            type: {
                type: String,
            },
            locationDestination: {
                type: { type: String },
                coordinates: [Number]
            },
            required: [true, 'Please include the destination of your trip'],
        },

        date: {
            type: Date,
            required: [true, 'Please include the date of your trip'],
            // min: today()
        },

        description: {
            type: String,
            required: [true, 'Please include a description for your trip'],
            minlength: 20,
        },

        numberOfPassengers: {
            type: Number,
            required: [true, 'Please include the number of passengers'],
            min: 1,
            max: 4,
        },

        smokingAllowed: {
            type: String,
            enum: ['YES', 'NO']
        },
    },

    {
        timestamps: true,
    }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;