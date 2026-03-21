const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const universities = [
    {
      name: "University of Cape Town",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-07-31"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "University of the Witwatersrand",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-08-31"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "Stellenbosch University",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-07-31"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "University of Pretoria",
      applicationOpen: new Date("2026-05-01"),
      applicationClose: new Date("2026-08-31"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "University of KwaZulu-Natal",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-09-30"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "University of South Africa (UNISA)",
      applicationOpen: new Date("2026-05-01"),
      applicationClose: new Date("2026-09-30"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "University of the Free State",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-09-30"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "Durban University of Technology",
      applicationOpen: new Date("2026-05-01"),
      applicationClose: new Date("2026-10-31"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "North-West University",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-09-30"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
    {
      name: "Nelson Mandela University",
      applicationOpen: new Date("2026-04-01"),
      applicationClose: new Date("2026-09-30"),
      requiredDocs: ["Matric Certificate", "ID", "Proof of Payment"],
    },
  ];

  for (const uni of universities) {
    await prisma.university.create({ data: uni });
  }
}

main()
  .then(() => console.log("Universities seeded successfully"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
