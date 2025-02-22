import DefaultRootLayout from "./layouts/DefaultRootLayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BookPage from "./pages/BookPage.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AdminRootLayout from "./layouts/AdminRootLayout.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

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
            <Route element={<ProtectedRoute/>}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path={"/admin/*"} element={<AdminRootLayout/>}>
            <Route index element={<h1>Admin</h1>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
