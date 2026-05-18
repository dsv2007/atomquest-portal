import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Employee Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">
        <Card>
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold">
              Total Goals
            </h2>

            <p className="text-4xl mt-4">5</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold">
              Completed
            </h2>

            <p className="text-4xl mt-4">2</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold">
              Pending
            </h2>

            <p className="text-4xl mt-4">3</p>
          </CardContent>
        </Card>
      </div>

      <Button>
        Create Goal
      </Button>
    </div>
  );
}