import Header from "../../components/user/Header";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="px-6 sm:px-10 md:px-20 mt-6 sm:mt-10">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Dashboard;
