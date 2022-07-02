const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
    {
        carPicture: {
            type: String,
            required: [true, 'Please include a picture of the car'],

        },

        licensePlate: {
            type: String,
            required: [true, 'Please include the license plate of the car'],
        },

        brand: {
            type: String,
        },

        carModel: {
            type: String,
        },

        year: {
            type: Number,
        },

        color: {
            type: String,
        }
    },

    {
        timestamps: true,
    }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;