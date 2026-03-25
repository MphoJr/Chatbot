const sequelize = require("./db");
const University = require("./models/university");
const FAQ = require("./models/FAQ");

async function seed() {
  try {
    // Reset tables
    await sequelize.sync({ force: true });

    // ✅ Insert all universities
    const universities = await University.bulkCreate([
      { name: "University of Cape Town", deadline: "30 Sept 2026" },
      { name: "University of the Witwatersrand", deadline: "15 Oct 2026" },
      { name: "Stellenbosch University", deadline: "30 Sept 2026" },
      { name: "University of Pretoria", deadline: "30 Sept 2026" },
      { name: "University of KwaZulu-Natal", deadline: "30 Sept 2026" },
      { name: "Nelson Mandela University", deadline: "30 Sept 2026" },
      { name: "University of Johannesburg", deadline: "30 Sept 2026" },
      { name: "Rhodes University", deadline: "30 Sept 2026" },
      { name: "North-West University", deadline: "30 Sept 2026" },
      { name: "University of the Western Cape", deadline: "30 Sept 2026" },
      { name: "University of Limpopo", deadline: "30 Sept 2026" },
      { name: "University of Fort Hare", deadline: "30 Sept 2026" },
      { name: "University of Zululand", deadline: "30 Sept 2026" },
      {
        name: "Cape Peninsula University of Technology",
        deadline: "30 Sept 2026",
      },
      { name: "Durban University of Technology", deadline: "30 Sept 2026" },
      { name: "Mangosuthu University of Technology", deadline: "30 Sept 2026" },
      { name: "Tshwane University of Technology", deadline: "30 Sept 2026" },
      { name: "Central University of Technology", deadline: "30 Sept 2026" },
      { name: "Walter Sisulu University", deadline: "30 Sept 2026" },
      {
        name: "Sefako Makgatho Health Sciences University",
        deadline: "30 Sept 2026",
      },
      { name: "Sol Plaatje University", deadline: "30 Sept 2026" },
      { name: "University of Mpumalanga", deadline: "30 Sept 2026" },
    ]);

    // ✅ Insert FAQs for each university
    const faqs = [];
    universities.forEach((uni) => {
      faqs.push({
        question: `What is the application deadline for ${uni.name}?`,
        answer: `Applications for ${uni.name} close on ${uni.deadline}.`,
        universityId: uni.id,
      });
      faqs.push({
        question: `Does ${uni.name} offer online applications?`,
        answer: `${uni.name} supports online applications via its student portal.`,
        universityId: uni.id,
      });
      faqs.push({
        question: `What documents are required at ${uni.name}?`,
        answer: `You need your ID, academic transcripts, and proof of payment for ${uni.name}.`,
        universityId: uni.id,
      });
      faqs.push({
        question: `Is financial aid available at ${uni.name}?`,
        answer: `${uni.name} offers bursaries, scholarships, and NSFAS funding options.`,
        universityId: uni.id,
      });
      faqs.push({
        question: `How much is the application fee at ${uni.name}?`,
        answer: `The application fee at ${uni.name} is typically between R100 and R250.`,
        universityId: uni.id,
      });
      faqs.push({
        question: `Does ${uni.name} provide student accommodation?`,
        answer: `${uni.name} offers on-campus residences and assists with private accommodation.`,
        universityId: uni.id,
      });
    });

    await FAQ.bulkCreate(faqs);

    console.log("✅ All universities with extended FAQs seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seed();
