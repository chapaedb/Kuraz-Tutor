const User = require("../models/userModel");

const getUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-passwordHash");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const profile = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            profile: {
                fullName: user.profile?.fullName || "",
                profilePicture: user.profile?.profilePicture || "",
                bio: user.profile?.bio || "",
            },
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };

        if (user.role === "Student") {
            profile.profile.learningPreferences = user.profile?.learningPreferences || [];
            profile.profile.previousSessions = user.profile?.previousSessions || [];
        }

        if (user.role === "Tutor") {
            profile.profile.subjects = user.profile?.subjects || [];
            profile.profile.experience = user.profile?.experience || "";
            profile.profile.qualifications = user.profile?.qualifications || "";
            profile.profile.availability = user.profile?.availability || [];
            profile.profile.ratings = user.profile?.ratings || {
                averageRating: 0,
                numberOfRatings: 0,
            };
        }

        res.status(200).json({
            success: true,
            data: profile,
        });
    } catch (error) {
        console.error("Error fetching user profile:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = getUserProfile;
