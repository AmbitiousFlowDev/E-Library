import RootLayout from "./layouts/RootLayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import { Suspense } from "react";
import lazyComponent from "./utils/lazyComponent.js";

import RegisterPage from "./pages/auth/RegisterPage.jsx";
import AdminCreateBookPage from "./pages/admin/books/AdminCreateBookPage.jsx";
import AdminUpdateBookPage from "./pages/admin/books/AdminUpdateBookPage.jsx";

const HomePage = lazyComponent(() => import("./pages/user/HomePage.jsx"));
const BooksPage = lazyComponent(() => import("./pages/user/BooksPage.jsx"));
const LoginPage = lazyComponent(() => import("./pages/auth/LoginPage.jsx"));
const ContactPage = lazyComponent(() => import("./pages/user/ContactPage.jsx"));
const BookPage = lazyComponent(() => import("./pages/user/BookPage.jsx"));
const ProfilePage = lazyComponent(() => import("./pages/user/ProfilePage.jsx"));
const BorrowPage = lazyComponent(() => import("./pages/user/BorrowPage.jsx"));
const LoadingPage = lazyComponent(() =>
  import("./pages/loading/LoadingPage.jsx")
);

const AdminHomePage = lazyComponent(() =>
  import("./pages/admin/AdminHomePage.jsx")
);
const AdminUsersPage = lazyComponent(() =>
  import("./pages/admin/users/AdminUsersPage.jsx")
);
const AdminBooksPage = lazyComponent(() =>
  import("./pages/admin/books/AdminBooksPage.jsx")
);

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/books/:id" element={<BookPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path={"/borrow/:id"} element={<BorrowPage />} />
                <Route path={"/admin/*"}>
                  <Route index element={<AdminHomePage />} />
                  <Route path="users" element={<AdminUsersPage />} />
                  <Route path="books" element={<AdminBooksPage />} />
                  <Route
                    path="books/create"
                    element={<AdminCreateBookPage />}
                  />
                  <Route
                    path="books/update/:id"
                    element={<AdminUpdateBookPage />}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}
