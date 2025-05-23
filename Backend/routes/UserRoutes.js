const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../modules/User");

// POST /api/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "მომხმარებელი უკვე არსებობს" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "რეგისტრაცია წარმატებით დასრულდა" });
  } catch (error) {
    res.status(500).json({ message: "შეცდომა სერვერზე", error });
  }
});

// POST /api/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "მომხმარებელი ვერ მოიძებნა" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "პაროლი არასწორია" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "devsecret",
      { expiresIn: "1d" }
    );

    res.json({
      message: "შესვლა წარმატებულია",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: "შესვლისას მოხდა შეცდომა" });
  }
});

// GET /api/
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "ვერ მოხერხდა მომხმარებლების წამოღება" });
  }
});

module.exports = router;
