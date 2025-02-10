
import { Button } from "@/components/ui/button";
import { Menu, Home, School, Users, LogIn } from "lucide-react"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Navigation for larger screens */}
      <nav className="bg-primary py-4 px-6 shadow-md sticky top-0 z-50 md:block hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-xl font-bold">CDF Monitor</h1>
            
            {/* Desktop navigation */}
            <div className="flex items-center space-x-4">
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
                variant="outline"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation for mobile screens */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-primary shadow-lg z-50">
        <div className="flex justify-around items-center py-2">
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white flex flex-col items-center gap-1 py-2"
            onClick={() => navigate("/")}
          >
            <Home size={20} />
            <span className="text-xs">Dashboard</span>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white flex flex-col items-center gap-1 py-2"
            onClick={() => navigate("/schools")}
          >
            <School size={20} />
            <span className="text-xs">Schools</span>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white flex flex-col items-center gap-1 py-2"
            onClick={() => navigate("/students")}
          >
            <Users size={20} />
            <span className="text-xs">Students</span>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-primary hover:bg-white flex flex-col items-center gap-1 py-2"
            onClick={() => navigate("/login")}
          >
            <LogIn size={20} />
            <span className="text-xs">Login</span>
          </Button>
        </div>
      </nav>
    </>
  );
};
