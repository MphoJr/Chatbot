const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ Get all universities
app.get("/universities", async (req, res) => {
  try {
    const universities = await prisma.university.findMany();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch universities" });
  }
});

// ✅ Get one university by name
app.get("/universities/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const university = await prisma.university.findUnique({
      where: { name },
      include: { faqs: true },
    });
    if (!university)
      return res.status(404).json({ error: "University not found" });
    res.json(university);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch university" });
  }
});

// ✅ Get FAQs (general career guidance, funding, etc.)
app.get("/faqs", async (req, res) => {
  try {
    const faqs = await prisma.fAQ.findMany();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
});

app.listen(PORT, () => {
  console.log(`Chatbot API running on http://localhost:${PORT}`);
});
