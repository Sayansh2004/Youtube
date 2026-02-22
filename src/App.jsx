import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}


