import { Route } from "react-router-dom";
import lazyComponent from "../utils/lazyComponent.js";

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

export default function UserRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/books/:id" element={<BookPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path={"/borrow/:id"} element={<BorrowPage />} />
      </Route>
    </>
  );
}
