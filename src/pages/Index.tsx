
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Index = () => {
  const { theme } = useTheme();

  const stats = [
    { title: "Total Schools", value: "156", growth: "+12% from last year" },
    { title: "Bursary Recipients", value: "1,234", growth: "+8% from last year" },
    { title: "Total Allocation", value: "KES 25.6M", growth: "+15% from last year" },
    { title: "Success Rate", value: "78%", growth: "+5% from last year" },
    { title: "Remaining Funds", value: "KES 4.2M", growth: "20% of total budget" },
    { title: "Annual Growth", value: "+15%", growth: "Compared to 10% target" },
  ];

  const developmentData = [
    { name: "Well Developed", value: 45, color: "#059669" },
    { name: "Needs Support", value: 35, color: "#d97706" },
    { name: "Critical", value: 20, color: "#dc2626" },
  ];

  const trendData = [
    { month: "Jan", amount: 2.1 },
    { month: "Feb", amount: 3.4 },
    { month: "Mar", amount: 2.8 },
    { month: "Apr", amount: 4.2 },
    { month: "May", amount: 3.9 },
    { month: "Jun", amount: 5.1 },
  ];

  const recentAllocations = [
    {
      school: "Mwangaza Secondary",
      amount: "KES 2.5M",
      date: "2024-02-15",
      status: "Disbursed",
    },
    {
      school: "Tumaini High",
      amount: "KES 1.8M",
      date: "2024-02-14",
      status: "Pending",
    },
    {
      school: "Unity School",
      amount: "KES 3.2M",
      date: "2024-02-13",
      status: "Disbursed",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-2 lg:text-3xl">
            CDF Performance Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and analyze CDF allocations and their impact on education
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative max-w-xs">
            <span className="absolute left-2.5 top-2.5 text-gray-500">
              <Search className="h-4 w-4" />
            </span>
            <Input
              placeholder="Search schools..."
              className="pl-8"
              type="search"
            />
          </div>
          <div className="flex gap-2">
            <select className="rounded-md border px-3 py-2 text-sm">
              <option>All Years</option>
              <option>2024</option>
              <option>2023</option>
            </select>
            <select className="rounded-md border px-3 py-2 text-sm">
              <option>All Regions</option>
              <option>North</option>
              <option>South</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="hover:shadow-lg transition-shadow animate-fade-in"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.growth}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-4">
            <CardHeader>
              <CardTitle>School Development Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={developmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {developmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardHeader>
              <CardTitle>Fund Disbursement Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#1a365d"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Allocations Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Allocations</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Export CSV
              </Button>
              <Button variant="outline" size="sm">
                Export PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>School</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAllocations.map((allocation) => (
                    <TableRow key={allocation.school}>
                      <TableCell className="font-medium">
                        {allocation.school}
                      </TableCell>
                      <TableCell>{allocation.amount}</TableCell>
                      <TableCell>{allocation.date}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            allocation.status === "Disbursed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {allocation.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
