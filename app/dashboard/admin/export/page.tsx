export default function ExportPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Export Reports
      </h1>

      <div className="bg-white rounded-xl shadow p-8 border max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Achievement Report
        </h2>

        <p className="text-gray-600 mb-6">
          Download employee goal achievement
          report in CSV format.
        </p>

        <a
          href="/api/export"
          className="bg-black text-white px-6 py-4 rounded inline-block"
        >
          Download CSV Report
        </a>
      </div>
    </div>
  );
}