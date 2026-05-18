import { prisma } from "@/lib/prisma";
import { Parser } from "json2csv";

export async function GET() {
  const goals = await prisma.goal.findMany();

  const formatted = goals.map((goal) => ({
    Title: goal.title,
    Description: goal.description,
    ThrustArea: goal.thrustArea,
    UOM: goal.uomType,
    Target: goal.target,
    Weightage: goal.weightage,
    Status: goal.status,
  }));

  const parser = new Parser();

  const csv = parser.parse(formatted);

  return new Response(csv, {
    status: 200,

    headers: {
      "Content-Type": "text/csv",

      "Content-Disposition":
        'attachment; filename="achievement-report.csv"',
    },
  });
}