async function getLogs() {
  const res = await fetch(
    "http://localhost:3000/api/audit",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function AuditPage() {
  const logs = await getLogs();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Audit Logs
      </h1>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <table className="w-full">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">
                Action
              </th>

              <th className="p-4 text-left">
                Performed By
              </th>

              <th className="p-4 text-left">
                Goal
              </th>

              <th className="p-4 text-left">
                Timestamp
              </th>
            </tr>
          </thead>

          <tbody>
            {logs.map((log: any) => (
              <tr
                key={log.id}
                className="border-b"
              >
                <td className="p-4">
                  {log.action}
                </td>

                <td className="p-4">
                  {log.performedBy}
                </td>

                <td className="p-4">
                  {log.goalTitle}
                </td>

                <td className="p-4">
                  {new Date(
                    log.timestamp
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}