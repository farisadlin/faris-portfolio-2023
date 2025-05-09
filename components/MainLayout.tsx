import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="px-10 md:px-36 lg:px-48"
      role="main"
      aria-label="Main content"
    >
      {children}
    </main>
  );
};

export default MainLayout;
