import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-primary py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-xl font-bold">CDF Monitor</h1>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white"
            onClick={() => navigate("/")}
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white"
            onClick={() => navigate("/schools")}
          >
            Schools
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white"
            onClick={() => navigate("/students")}
          >
            Students
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white"
            onClick={() => navigate("/reports")}
          >
            Reports
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};