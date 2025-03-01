import DefaultRootLayout  from "./layouts/DefaultRootLayout.jsx";
import { BrowserRouter    as Router, Routes, Route } from "react-router-dom";
import AuthProvider       from "./context/AuthProvider.jsx";
import AdminRootLayout    from "./layouts/AdminRootLayout.jsx";
import ProtectedRoute     from "./utils/ProtectedRoute.jsx";
import {Suspense}         from "react";
import lazyComponent      from "./utils/lazyComponent.js"


const HomePage           = lazyComponent(() => import("./pages/user/HomePage.jsx"));
const BooksPage          = lazyComponent(() => import("./pages/user/BooksPage.jsx"));
const LoginPage          = lazyComponent(() => import("./pages/auth/LoginPage.jsx"));
const ContactPage        = lazyComponent(() => import("./pages/user/ContactPage.jsx"));
const BookPage           = lazyComponent(() => import("./pages/user/BookPage.jsx"));
const ProfilePage        = lazyComponent(() => import("./pages/user/ProfilePage.jsx"));
const BorrowPage         = lazyComponent(() => import("./pages/user/BorrowPage.jsx"));
const LoadingPage        = lazyComponent(() => import("./pages/loading/LoadingPage.jsx"));

const AdminDashBoardPage = lazyComponent(() => import("./pages/admin/AdminDashBoardPage.jsx"));
const AdminUsersPage     = lazyComponent(() => import("./pages/admin/AdminUsersPage.jsx"));
const AdminBooksPage     = lazyComponent(() => import("./pages/admin/AdminBooksPage.jsx"));

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
              <Route index element={<AdminDashBoardPage/>} />
              <Route path="users" element={<AdminUsersPage/>} />
              <Route path="books" element={<AdminBooksPage/>} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
}
