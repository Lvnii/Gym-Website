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

// POST /api/login — Authenticate user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "ელ.ფოსტა ან პაროლი არასწორია" });
    }

    // Check password (plain text comparison – insecure for production)
    if (user.password !== password) {
      return res.status(400).json({ error: "ელ.ფოსტა ან პაროლი არასწორია" });
    }

    // Successful login
    res.json({ message: "შესვლა წარმატებულია!" });
  } catch (error) {
    res.status(500).json({ error: "შეცდომა სერვერზე" });
  }
});

// GET / — Show all users (for testing)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "ვერ მოხერხდა მომხმარებლების წამოღება" });
  }
});

module.exports = router;
