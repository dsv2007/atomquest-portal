"use client";

import { useState } from "react";

export default function GoalPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    thrustArea: "",
    uomType: "",
    target: "",
    weightage: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/goals", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        target: Number(form.target),
        weightage: Number(form.weightage),
        userId: "employee-id",
      }),
    });

    const data = await res.json();

    alert("Goal Created");
    console.log(data);
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Create Goal
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl"
      >
        <input
          className="border p-3 w-full"
          placeholder="Goal Title"
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />

        <textarea
          className="border p-3 w-full"
          placeholder="Description"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          className="border p-3 w-full"
          placeholder="Thrust Area"
          onChange={(e) =>
            setForm({
              ...form,
              thrustArea: e.target.value,
            })
          }
        />

        <select
          className="border p-3 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              uomType: e.target.value,
            })
          }
        >
          <option>Choose UOM</option>
          <option>Numeric</option>
          <option>Percentage</option>
          <option>Timeline</option>
          <option>Zero</option>
        </select>

        <input
          className="border p-3 w-full"
          placeholder="Target"
          type="number"
          onChange={(e) =>
            setForm({
              ...form,
              target: e.target.value,
            })
          }
        />

        <input
          className="border p-3 w-full"
          placeholder="Weightage"
          type="number"
          onChange={(e) =>
            setForm({
              ...form,
              weightage: e.target.value,
            })
          }
        />

        <button className="bg-black text-white px-6 py-3 rounded">
          Submit Goal
        </button>
      </form>
    </div>
  );
}