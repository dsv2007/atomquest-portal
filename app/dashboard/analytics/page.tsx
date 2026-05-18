"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const progressData = [
  {
    quarter: "Q1",
    completion: 65,
  },
  {
    quarter: "Q2",
    completion: 78,
  },
  {
    quarter: "Q3",
    completion: 85,
  },
  {
    quarter: "Q4",
    completion: 92,
  },
];

const statusData = [
  {
    name: "Completed",
    value: 12,
  },
  {
    name: "On Track",
    value: 7,
  },
  {
    name: "Pending",
    value: 4,
  },
];

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#ef4444",
];

export default function AnalyticsPage() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Total Goals
          </h2>

          <p className="text-4xl font-bold mt-3">
            23
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Completed
          </h2>

          <p className="text-4xl font-bold mt-3 text-green-600">
            12
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            On Track
          </h2>

          <p className="text-4xl font-bold mt-3 text-blue-600">
            7
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Pending
          </h2>

          <p className="text-4xl font-bold mt-3 text-red-600">
            4
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Quarterly Goal Progress
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={progressData}>
              <XAxis dataKey="quarter" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="completion"
                fill="#000000"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Goal Status Distribution
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {statusData.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mt-10">
        <h2 className="text-2xl font-semibold mb-6">
          Manager Effectiveness
        </h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4 text-left">
                Manager
              </th>

              <th className="p-4 text-left">
                Team Completion %
              </th>

              <th className="p-4 text-left">
                Check-ins Completed
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">
                Rahul Sharma
              </td>

              <td className="p-4">
                92%
              </td>

              <td className="p-4">
                28
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-4">
                Priya Menon
              </td>

              <td className="p-4">
                87%
              </td>

              <td className="p-4">
                24
              </td>
            </tr>

            <tr>
              <td className="p-4">
                Arjun Kumar
              </td>

              <td className="p-4">
                81%
              </td>

              <td className="p-4">
                20
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}