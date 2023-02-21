import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const prisma = new PrismaClient({ log: ["query"] });

const emailAdd = "alvinfloresacosta@gmail.com";

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: emailAdd },
  });

  console.log(user);
}

main()
  .catch((err) => {
    console.log(err.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
