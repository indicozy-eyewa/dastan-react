import { Outlet } from "react-router";

export default function LayoutAdmin() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-40 h-screen bg-red-500"></div>
      <div className="pl-44">
        <Outlet />
      </div>
    </div>
  );
}
