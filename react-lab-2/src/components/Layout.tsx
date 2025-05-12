import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="rounded-lg shadow-lg p-6 bg-gray-800 w-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
