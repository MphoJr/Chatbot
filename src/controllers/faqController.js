const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all FAQs
exports.getFaqs = async (req, res) => {
  try {
    const faqs = await prisma.fAQ.findMany();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch FAQs" });
  }
};
