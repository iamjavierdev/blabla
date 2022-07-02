const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, 'These username is already taken'],
      required: [true, 'Please include a username'], // confirmar si está bien
      minlength: 3,
      maxlength: 50,
      trim: true,
    },

    profilePic: {
      type: String,
      default: 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png',
    },

    password: {
      type: String,
      required: [true, 'Please include a password'],
      minlength: 3,
      //match: /[0-6]{4}[A-C]/,
    },

    email: {
      type: String,
      unique: [true, 'These email is already taken'],
      required: [true, 'Please include an email'],
    },

    phoneNumber: {
      type: Number,
      required: [true, 'Please include a phone number'],
      unique: [true, 'These phone number is already taken']
    },

    role: {
      type: String,
      enum: ['TRAVELER', 'DRIVER', 'ADMIN'],
      default: 'TRAVELER'
    },

    birthDate: {
      type: Date,
      required: [true, 'Please include your birthday'],
      // condición de >18 today
    },
  },

  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
