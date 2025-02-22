import { Outlet } from "react-router-dom";
import Navbar     from "../components/Navbar.jsx";
import Footer     from "../components/Footer.jsx";

export default function DefaultRootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
