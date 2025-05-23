// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../modules/User");

// POST /api/register — Save user to MongoDB
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "მომხმარებელი უკვე არსებობს" });
    }

    // Save new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "რეგისტრაცია წარმატებით დასრულდა" });
  } catch (error) {
    res.status(500).json({ message: "შეცდომა სერვერზე", error });
  }
});

// GET / — Show all users (for your testing)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "ვერ მოხერხდა მომხმარებლების წამოღება" });
  }
});

module.exports = router;
