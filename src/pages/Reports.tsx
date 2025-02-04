import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

const Reports = () => {
  // Mock data for demonstration
  const summaryStats = [
    { title: "Total Bursary Funds", value: "KES 25.6M" },
    { title: "Students Funded", value: "1,234" },
    { title: "Underdeveloped Schools", value: "45" },
    { title: "Average School Rating", value: "6.8/10" },
  ];

  const mockChartData = [
    { month: "Jan", amount: 2500000 },
    { month: "Feb", amount: 3200000 },
    { month: "Mar", amount: 2800000 },
    { month: "Apr", amount: 3500000 },
    { month: "May", amount: 4200000 },
    { month: "Jun", amount: 3800000 },
  ];

  const mockTableData = [
    {
      school: "Mwangaza Secondary",
      recipients: 45,
      allocated: "KES 2.5M",
      status: "Completed",
    },
    {
      school: "Tumaini High",
      recipients: 38,
      allocated: "KES 1.8M",
      status: "In Progress",
    },
    {
      school: "Unity School",
      recipients: 52,
      allocated: "KES 3.2M",
      status: "Completed",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary lg:text-3xl">Reports</h1>
          <p className="text-gray-600">
            Comprehensive insights into CDF allocations and impact
          </p>
        </div>

        {/* Filters Section */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <input
            type="text"
            placeholder="Search schools..."
            className="w-full rounded-lg border border-gray-300 p-2"
          />
          <select className="w-full rounded-lg border border-gray-300 p-2">
            <option value="">Select Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
          <select className="w-full rounded-lg border border-gray-300 p-2">
            <option value="">Select County</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
          </select>
          <select className="w-full rounded-lg border border-gray-300 p-2">
            <option value="">Performance Level</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryStats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4">
                <CardTitle className="text-sm text-gray-600">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="p-4">
            <CardTitle>Bursary Allocation Trends</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px] w-full">
              <ChartContainer config={{}}>
                <BarChart data={mockChartData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Bar
                    dataKey="amount"
                    fill="#1a365d"
                    radius={[4, 4, 0, 0]}
                  />
                  <ChartTooltip />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Table Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Detailed Reports</CardTitle>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
                <FileSpreadsheet className="h-4 w-4" />
                Excel
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
                <FileText className="h-4 w-4" />
                PDF
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
                <Download className="h-4 w-4" />
                CSV
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>School</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Allocated</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTableData.map((row) => (
                    <TableRow key={row.school}>
                      <TableCell className="font-medium">{row.school}</TableCell>
                      <TableCell>{row.recipients}</TableCell>
                      <TableCell>{row.allocated}</TableCell>
                      <TableCell>{row.status}</TableCell>
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

export default Reports;