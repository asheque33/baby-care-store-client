import FooterPage from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      {children}
      <FooterPage />
    </div>
  );
};

export default CommonLayout;
