import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";

const Index = () => {
  const stats = [
    { title: "Total Schools", value: "156" },
    { title: "Bursary Recipients", value: "1,234" },
    { title: "Total Allocation", value: "KES 25.6M" },
    { title: "Success Rate", value: "78%" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-2 lg:text-3xl">
            CDF Performance Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and analyze CDF allocations and their impact on education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
              <p className="text-2xl font-bold text-primary mt-2">{stat.value}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-4">
            <h2 className="text-xl font-bold text-primary mb-4">
              School Development Status
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-600 w-32">Well Developed</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-secondary h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <span className="text-gray-600 w-16 text-right">45%</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-600 w-32">Needs Support</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-warning h-2.5 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span className="text-gray-600 w-16 text-right">35%</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-gray-600 w-32">Critical</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-destructive h-2.5 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <span className="text-gray-600 w-16 text-right">20%</span>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="text-xl font-bold text-primary mb-4">
              Recent Allocations
            </h2>
            <div className="space-y-4">
              {[
                {
                  school: "Mwangaza Secondary",
                  amount: "KES 2.5M",
                  date: "2024-02-15",
                },
                {
                  school: "Tumaini High",
                  amount: "KES 1.8M",
                  date: "2024-02-14",
                },
                {
                  school: "Unity School",
                  amount: "KES 3.2M",
                  date: "2024-02-13",
                },
              ].map((allocation) => (
                <div
                  key={allocation.school}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-gray-50 rounded-lg gap-2"
                >
                  <div>
                    <p className="font-medium text-primary">
                      {allocation.school}
                    </p>
                    <p className="text-sm text-gray-500">{allocation.date}</p>
                  </div>
                  <p className="font-medium text-secondary">{allocation.amount}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;