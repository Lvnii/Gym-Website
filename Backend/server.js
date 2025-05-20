const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./modules/Db");

dotenv.config(); // Load .env first
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.get("/test", (req, res) => res.send("Backend is working"));

app.use("/api", userRoutes);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
