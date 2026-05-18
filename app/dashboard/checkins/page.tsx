"use client";

import { useEffect, useState } from "react";

export default function CheckInPage() {
  const [goals, setGoals] = useState<any[]>([]);

  useEffect(() => {
    fetchGoals();
  }, []);

  async function fetchGoals() {
    const res = await fetch("/api/goals");
    const data = await res.json();

    setGoals(data);
  }

  async function submitCheckIn(goalId: string) {
    const achievement = (
      document.getElementById(
        `achievement-${goalId}`
      ) as HTMLInputElement
    ).value;

    const status = (
      document.getElementById(
        `status-${goalId}`
      ) as HTMLSelectElement
    ).value;

    const comment = (
      document.getElementById(
        `comment-${goalId}`
      ) as HTMLTextAreaElement
    ).value;

    await fetch("/api/checkins", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        goalId,
        achievement: Number(achievement),
        status,
        comment,
      }),
    });

    alert("Check-in Submitted");
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Quarterly Check-ins
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

            <p className="text-gray-600 mt-2">
              {goal.description}
            </p>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <div>
                <label className="font-medium">
                  Target
                </label>

                <input
                  disabled
                  value={goal.target}
                  className="border p-3 w-full mt-2 bg-gray-100"
                />
              </div>

              <div>
                <label className="font-medium">
                  Achievement
                </label>

                <input
                  id={`achievement-${goal.id}`}
                  type="number"
                  placeholder="Enter achievement"
                  className="border p-3 w-full mt-2"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="font-medium">
                Status
              </label>

              <select
                id={`status-${goal.id}`}
                className="border p-3 w-full mt-2"
              >
                <option>Not Started</option>
                <option>On Track</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="font-medium">
                Manager / Employee Comment
              </label>

              <textarea
                id={`comment-${goal.id}`}
                placeholder="Enter comments"
                className="border p-3 w-full mt-2"
                rows={4}
              />
            </div>

            <button
              onClick={() =>
                submitCheckIn(goal.id)
              }
              className="bg-black text-white px-6 py-3 rounded mt-6"
            >
              Submit Check-in
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}