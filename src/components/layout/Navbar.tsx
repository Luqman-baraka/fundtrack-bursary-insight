
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">CDF Monitor</h1>
          
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-gray-200"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
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

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="mt-4 space-y-2 lg:hidden animate-fade-in">
            <Button
              variant="ghost"
              className="w-full text-white hover:text-primary hover:bg-white"
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className="w-full text-white hover:text-primary hover:bg-white"
              onClick={() => {
                navigate("/schools");
                setIsMenuOpen(false);
              }}
            >
              Schools
            </Button>
            <Button
              variant="ghost"
              className="w-full text-white hover:text-primary hover:bg-white"
              onClick={() => {
                navigate("/students");
                setIsMenuOpen(false);
              }}
            >
              Students
            </Button>
            <Button
              variant="outline"
              className="w-full bg-white text-primary hover:bg-gray-100"
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
