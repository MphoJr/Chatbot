const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all universities
exports.getUniversities = async (req, res) => {
  try {
    const universities = await prisma.university.findMany();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch universities" });
  }
};

// Get one university by name
exports.getUniversityByName = async (req, res) => {
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
};
