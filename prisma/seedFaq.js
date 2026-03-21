const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const faqs = [
    {
      category: "Career",
      question: "What is APS and why does it matter?",
      answer:
        "APS (Admission Point Score) is calculated from your matric results. Each subject grade is converted into points, and universities use this score to determine if you qualify for a program.",
    },
    {
      category: "Career",
      question: "How do I choose the right course?",
      answer:
        "Think about your interests, strengths, and career goals. Universities often provide career guidance services and aptitude tests to help you decide.",
    },
    {
      category: "Funding",
      question: "What is NSFAS and how do I apply?",
      answer:
        "NSFAS is the National Student Financial Aid Scheme. It funds eligible South African students. Applications are online at nsfas.org.za and require your ID, proof of income, and matric results.",
    },
    {
      category: "Funding",
      question: "Are there bursaries available?",
      answer:
        "Yes, many universities and private organizations offer bursaries. Check each university’s website and apply early, as bursary deadlines may differ from application deadlines.",
    },
    {
      category: "Documents",
      question: "What documents are needed for university applications?",
      answer:
        "Most universities require your matric certificate or latest results, a certified copy of your ID, and proof of payment. Some programs may need portfolios or recommendation letters.",
    },
    {
      category: "Deadlines",
      question: "When should I start applying?",
      answer:
        "Applications usually open between April and June and close between July and October. Apply as early as possible to avoid missing deadlines.",
    },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq });
  }
}

main()
  .then(() => console.log("FAQs seeded successfully"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
