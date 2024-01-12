import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  if (!localStorage.getItem("token")) return <Navigate to={"/sign-in"} />;

  return (
    <div>
      <header>
        <nav className="border-b-[1px] border-b-[rgba(67,67,67,0.1)] dark:border-b-[rgba(255,255,255,0.10)]">
          <Navbar />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
