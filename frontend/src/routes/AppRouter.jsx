import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import lazyComponent from "../utils/lazyComponent.js";
import AdminRootLayout from "../layouts/AdminRootLayout.jsx";
import DefaultRootLayout from "../layouts/DefaultRootLayout.jsx";


const AdminDashBoardPage = lazyComponent(() =>
  import("../pages/admin/AdminDashBoardPage.jsx")
);
const AdminUsersPage = lazyComponent(() =>
  import("../pages/admin/AdminUsersPage.jsx")
);
const AdminBooksPage = lazyComponent(() =>
  import("../pages/admin/AdminBooksPage.jsx")
);

const HomePage = lazyComponent(() => import("../pages/user/HomePage.jsx"));
const BooksPage = lazyComponent(() => import("../pages/user/BooksPage.jsx"));
const LoginPage = lazyComponent(() => import("../pages/auth/LoginPage.jsx"));
const ContactPage = lazyComponent(() =>
  import("../pages/user/ContactPage.jsx")
);
const BookPage = lazyComponent(() => import("../pages/user/BookPage.jsx"));
const ProfilePage = lazyComponent(() =>
  import("../pages/user/ProfilePage.jsx")
);
const BorrowPage = lazyComponent(() => import("../pages/user/BorrowPage.jsx"));


const LoadingPage = lazyComponent(() =>
  import("../pages/loading/LoadingPage.jsx")
);

export default function AppRouter() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<AdminRootLayout />}>
            <AdminRoutes />
          </Route>
          <Route path="/*" element={<DefaultRootLayout />}>
            <UserRoutes />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};