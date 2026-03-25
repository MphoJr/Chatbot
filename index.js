const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const University = require("./models/University");
const FAQ = require("./models/FAQ");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ Get all universities
app.get("/universities", async (req, res) => {
  try {
    const universities = await University.findAll();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch universities" });
  }
});

// ✅ Get one university by name (with FAQs)
app.get("/universities/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const university = await University.findOne({
      where: { name },
      include: FAQ,
    });
    if (!university)
      return res.status(404).json({ error: "University not found" });
    res.json(university);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch university" });
  }
});

// ✅ Get FAQs
app.get("/faqs", async (req, res) => {
  try {
    const faqs = await FAQ.findAll();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
});

// Sync DB and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Chatbot API running on http://localhost:${PORT}`);
  });
});
