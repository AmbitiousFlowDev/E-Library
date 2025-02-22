import DefaultRootLayout from "../layouts/DefaultRootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import LoginPage from "../pages/LoginPage";
import ContactPage from "../pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultRootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}
