import DefaultRootLayout from "./layouts/DefaultRootLayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BookPage from "./pages/BookPage.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<DefaultRootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/books/:id" element={<BookPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
