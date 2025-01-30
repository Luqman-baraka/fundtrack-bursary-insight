import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data - replace with actual API calls
const mockSchool = {
  id: 1,
  name: "Mwangaza Secondary",
  location: "Nairobi",
  status: "green",
  score: 9,
  contact: {
    phone: "+254 123 456 789",
    email: "info@mwangaza.edu",
  },
  infrastructure: {
    labs: 3,
    tiledClassrooms: true,
    computers: 25,
    library: true,
    waterSupply: true,
    electricity: true,
    sanitation: "Good",
  },
  allocations: [
    {
      id: 1,
      date: "2023-01-15",
      amount: 1500000,
      purpose: "Science Lab Equipment",
    },
    {
      id: 2,
      date: "2023-06-20",
      amount: 800000,
      purpose: "Computer Lab Upgrade",
    },
  ],
  students: [
    {
      id: 1,
      name: "John Doe",
      year: "Form 3",
      bursaryAmount: 35000,
      performance: "High",
    },
    {
      id: 2,
      name: "Jane Smith",
      year: "Form 2",
      bursaryAmount: 30000,
      performance: "Average",
    },
  ],
};

const SchoolDetails = () => {
  const { id } = useParams();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{mockSchool.name}</h1>
            <Badge
              className={`${getStatusColor(
                mockSchool.status
              )} text-white capitalize`}
            >
              {mockSchool.status}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2">
            Location: {mockSchool.location}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Phone: {mockSchool.contact.phone}</p>
              <p>Email: {mockSchool.contact.email}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Science Labs: {mockSchool.infrastructure.labs}</p>
                <p>
                  Tiled Classrooms:{" "}
                  {mockSchool.infrastructure.tiledClassrooms ? "Yes" : "No"}
                </p>
                <p>Computers: {mockSchool.infrastructure.computers}</p>
                <p>
                  Library: {mockSchool.infrastructure.library ? "Yes" : "No"}
                </p>
                <p>
                  Water Supply:{" "}
                  {mockSchool.infrastructure.waterSupply ? "Yes" : "No"}
                </p>
                <p>
                  Electricity:{" "}
                  {mockSchool.infrastructure.electricity ? "Yes" : "No"}
                </p>
                <p>Sanitation: {mockSchool.infrastructure.sanitation}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>CDF Allocation History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount (KES)</TableHead>
                  <TableHead>Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockSchool.allocations.map((allocation) => (
                  <TableRow key={allocation.id}>
                    <TableCell>{allocation.date}</TableCell>
                    <TableCell>{allocation.amount.toLocaleString()}</TableCell>
                    <TableCell>{allocation.purpose}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>CDF Bursary Recipients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Academic Year</TableHead>
                  <TableHead>Bursary Amount (KES)</TableHead>
                  <TableHead>Performance Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockSchool.students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.bursaryAmount.toLocaleString()}</TableCell>
                    <TableCell>{student.performance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SchoolDetails;