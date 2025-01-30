import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";

// Mock data - replace with actual API calls
const mockSchools = [
  {
    id: 1,
    name: "Mwangaza Secondary",
    location: "Nairobi",
    status: "green",
    score: 9,
    labs: 3,
    tiledClassrooms: true,
    computers: 25,
    library: true,
  },
  {
    id: 2,
    name: "Sunrise High School",
    location: "Mombasa",
    status: "orange",
    score: 6,
    labs: 1,
    tiledClassrooms: true,
    computers: 10,
    library: false,
  },
  {
    id: 3,
    name: "Unity Secondary",
    location: "Kisumu",
    status: "red",
    score: 3,
    labs: 0,
    tiledClassrooms: false,
    computers: 2,
    library: false,
  },
];

const Schools = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSchools = mockSchools.filter((school) => {
    const matchesSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || school.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Schools</h1>
          <Button onClick={() => navigate("/schools/new")}>Add New School</Button>
        </div>

        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search schools by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select
            value={statusFilter}
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="green">Green (Well Developed)</SelectItem>
              <SelectItem value="orange">Orange (Needs Support)</SelectItem>
              <SelectItem value="red">Red (Urgent Attention)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchools.map((school) => (
            <Card
              key={school.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/schools/${school.id}`)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">
                  {school.name}
                </CardTitle>
                <Badge
                  className={`${getStatusColor(
                    school.status
                  )} text-white capitalize`}
                >
                  {school.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Location: {school.location}
                  </p>
                  <p className="text-sm font-medium">
                    Development Score: {school.score}/10
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>Science Labs: {school.labs}</p>
                    <p>
                      Tiled Classrooms:{" "}
                      {school.tiledClassrooms ? "Yes" : "No"}
                    </p>
                    <p>Computers: {school.computers}</p>
                    <p>Library: {school.library ? "Yes" : "No"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Schools;