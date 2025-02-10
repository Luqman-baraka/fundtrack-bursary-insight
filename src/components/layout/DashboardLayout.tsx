
import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-12">
      <Navbar />
      <main className="container mx-auto px-4 py-4 lg:px-6 lg:py-8 animate-fade-in md:pb-4 pb-20">
        {children}
      </main>
    </div>
  );
};
