import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const goal = await prisma.goal.update({
    where: {
      id: body.goalId,
    },

    data: {
      locked: true,
      status: "Approved",
    },
  });

  await prisma.auditLog.create({
    data: {
      action: "Goal Approved",
      performedBy: "Manager",
      goalTitle: goal.title,
    },
  });

  return NextResponse.json(goal);
}