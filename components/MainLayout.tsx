import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-10 md:px-36 lg:px-48">{children}</div>;
};

export default MainLayout;
