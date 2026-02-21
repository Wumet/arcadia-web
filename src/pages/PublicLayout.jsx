import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/modals/LogIn";
import CreateAccount from "../components/modals/CreateAccount";

function PublicLayout() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

  return (
    <>
      <Header
        onLogInClick={() => setIsLogInOpen(true)}
        onCreateAccountClick={() => setIsCreateAccountOpen(true)}
      />
      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer />
      <Login isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
      <CreateAccount
        isOpen={isCreateAccountOpen}
        onClose={() => setIsCreateAccountOpen(false)}
      />
    </>
  );
}

export default PublicLayout;
