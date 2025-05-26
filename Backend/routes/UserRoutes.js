const express = require("express");
const router = express.Router();
const User = require("../modules/User");

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "მომხმარებელი უკვე არსებობს" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "რეგისტრაცია წარმატებით დასრულდა" });
  } catch (error) {
    res.status(500).json({ message: "შეცდომა სერვერზე", error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "ელ.ფოსტა ან პაროლი არასწორია" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "ელ.ფოსტა ან პაროლი არასწორია" });
    }

    res.json({ message: "შესვლა წარმატებულია!" });
  } catch (error) {
    res.status(500).json({ error: "შეცდომა სერვერზე" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "ვერ მოხერხდა მომხმარებლების წამოღება" });
  }
});

module.exports = router;
