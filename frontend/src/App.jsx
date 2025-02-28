import DefaultRootLayout from "./layouts/DefaultRootLayout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider    from "./context/AuthProvider.jsx";
import AdminRootLayout from "./layouts/AdminRootLayout.jsx";
import ProtectedRoute  from "./utils/ProtectedRoute.jsx";
import {Suspense}      from "react";
import LoadingPage     from "./pages/LoadingPage.jsx";

import lazyComponent from "./utils/lazyComponent.js"
import BorrowPage from "./pages/BorrowPage.jsx";

const HomePage    = lazyComponent(() => import("./pages/HomePage.jsx"));
const BooksPage   = lazyComponent(() => import("./pages/BooksPage.jsx"));
const LoginPage   = lazyComponent(() => import("./pages/LoginPage.jsx"));
const ContactPage = lazyComponent(() => import("./pages/ContactPage.jsx"));
const BookPage    = lazyComponent(() => import("./pages/BookPage.jsx"));
const ProfilePage = lazyComponent(() => import("./pages/ProfilePage.jsx"));

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingPage/>}>
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
                <Route path={'/borrow/:id'} element={<BorrowPage />}/>
              </Route>
            </Route>
            <Route path={"/admin/*"} element={<AdminRootLayout/>}>
              <Route index element={<h1>Admin</h1>} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}
