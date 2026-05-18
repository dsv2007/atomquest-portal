import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const checkIn = await prisma.checkIn.create({
    data: {
      achievement: body.achievement,
      status: body.status,
      comment: body.comment,
      goalId: body.goalId,
    },
  });

  return NextResponse.json(checkIn);
}