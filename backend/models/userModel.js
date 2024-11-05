const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true   
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Student", "Tutor", "Admin"],
        required: true
    },
    profile: {
        fullName: {
            type: String,
            required: true
        },
        profilePicture: String,
        bio: String,
        // Student
        learningPreferences: {
            type: [String],
            required: function() { return this.role === "Student"; }
        },
        previousSessions: [{
            tutorId: mongoose.Schema.Types.ObjectId,
            date: Date,
            rating: Number
        }],
        // Tutor
        subjects: {
            type: [String],
            required: function() { return this.role === "Tutor"; }
        },
        experience: {
            type: String,
            required: function() { return this.role === "Tutor"; }
        },
        qualifications: String,
        availability: [{
            day: String,
            startTime: String,
            endTime: String
        }],
        ratings: {
            averageRating: Number,
            numberOfRatings: Number
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
