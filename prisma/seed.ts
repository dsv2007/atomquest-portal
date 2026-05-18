import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash(
    "password123",
    10
  );

  await prisma.user.createMany({
    data: [
      {
        name: "Rahul Sharma",
        email: "employee1@test.com",
        password,
        role: "EMPLOYEE",
      },

      {
        name: "Priya Menon",
        email: "employee2@test.com",
        password,
        role: "EMPLOYEE",
      },

      {
        name: "Arjun Kumar",
        email: "employee3@test.com",
        password,
        role: "EMPLOYEE",
      },

      {
        name: "Manager User",
        email: "manager@test.com",
        password,
        role: "MANAGER",
      },

      {
        name: "Admin User",
        email: "admin@test.com",
        password,
        role: "ADMIN",
      },
    ],

    skipDuplicates: true,
  });

  const users = await prisma.user.findMany();

  const employee = users.find(
    (u) => u.role === "EMPLOYEE"
  );

  if (!employee) return;

  for (let i = 1; i <= 10; i++) {
    const goal = await prisma.goal.create({
      data: {
        title: `Business Goal ${i}`,

        description:
          "Improve organizational performance and KPI achievement.",

        thrustArea: "Business Growth",

        uomType: "Numeric",

        target: 100,

        weightage: 10,

        status:
          i <= 5
            ? "Approved"
            : "Not Started",

        locked: i <= 5,

        userId: employee.id,
      },
    });

    if (i <= 5) {
      await prisma.checkIn.create({
        data: {
          achievement: 70 + i,

          status: "On Track",

          comment:
            "Quarterly progress is satisfactory.",

          goalId: goal.id,
        },
      });

      await prisma.auditLog.create({
        data: {
          action: "Goal Approved",

          performedBy: "Manager",

          goalTitle: goal.title,
        },
      });
    }
  }

  console.log("Enterprise sample data created");
}

main();