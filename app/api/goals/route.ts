import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const goals = await prisma.goal.findMany();

  return NextResponse.json(goals);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return NextResponse.json({
        error: "No users found",
      });
    }

    const goal = await prisma.goal.create({
      data: {
        title: body.title,
        description: body.description,
        thrustArea: body.thrustArea,
        uomType: body.uomType,
        target: Number(body.target),
        weightage: Number(body.weightage),
        status: "Not Started",
        locked: false,
        userId: users[0].id,
      },
    });

    return NextResponse.json(goal);
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      error: "Failed to create goal",
    });
  }
}