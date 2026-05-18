import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-72 bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-10">
          AtomQuest
        </h1>

        <nav className="space-y-4">
          <Link
            href="/dashboard/employee"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Employee Dashboard
          </Link>

          <Link
            href="/dashboard/employee/goals"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Create Goals
          </Link>

          <Link
            href="/dashboard/checkins"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Quarterly Check-ins
          </Link>

          <Link
            href="/dashboard/manager/goals"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Manager Approval
          </Link>

          <Link
            href="/dashboard/admin"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Admin Dashboard
          </Link>

          <Link
            href="/dashboard/analytics"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Analytics
          </Link>

          <Link
            href="/dashboard/admin/audit"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Audit Logs
          </Link>

          <Link
            href="/dashboard/admin/export"
            className="block hover:bg-gray-800 p-3 rounded"
          >
            Export Reports
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}