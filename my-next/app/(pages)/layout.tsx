import React from "react";
import Menu from "../shared/components/Menu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-between h-32 bg-gray-900">
        <p>header</p>
        <p>Logout</p>
      </div>

      {children}

      <Menu />
      <div className="flex flex-col h-32 text-center bg-red-900">
        <p>footer</p>
      </div>
    </>
  );
};
export default Layout;
