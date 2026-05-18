"use client";

import { useEffect, useState } from "react";

export default function ManagerGoals() {
  const [goals, setGoals] = useState<any[]>([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  async function fetchGoals() {
    const res = await fetch("/api/goals");
    const data = await res.json();

    setGoals(data);
  }

  async function approveGoal(goalId: string) {
    await fetch("/api/goals/approve", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        goalId,
      }),
    });

    alert("Goal Approved");

    fetchGoals();
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Manager Goal Approval
      </h1>

      <div className="space-y-6">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="bg-white shadow rounded-xl p-6 border"
          >
            <h2 className="text-2xl font-semibold">
              {goal.title}
            </h2>

            <p className="mt-2 text-gray-600">
              {goal.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-5">
              <div>
                <p className="font-semibold">
                  Target
                </p>

                <p>{goal.target}</p>
              </div>

              <div>
                <p className="font-semibold">
                  Weightage
                </p>

                <p>{goal.weightage}%</p>
              </div>

              <div>
                <p className="font-semibold">
                  Status
                </p>

                <p>{goal.status}</p>
              </div>
            </div>

            <button
              onClick={() =>
                approveGoal(goal.id)
              }
              className="bg-green-600 text-white px-5 py-3 rounded mt-6"
            >
              Approve Goal
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}