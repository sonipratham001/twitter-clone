export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d' // For example, update to 30 days
    });

    res.cookie("jwt", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // Update cookie expiration to match the new token expiration
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};