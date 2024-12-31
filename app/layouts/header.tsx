import { Outlet } from "react-router";
import Header from "~/routes/header";

export default function LayoutHeader() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
