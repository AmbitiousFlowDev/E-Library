import lazyComponent from "../utils/lazyComponent.js";
import { Route }     from "react-router-dom";

const AdminDashBoardPage = lazyComponent(() =>
  import("../pages/admin/AdminDashBoardPage.jsx")
);
const AdminUsersPage = lazyComponent(() =>
  import("../pages/admin/AdminUsersPage.jsx")
);
const AdminBooksPage = lazyComponent(() =>
  import("../pages/admin/AdminBooksPage.jsx")
);

export default function AdminRoutes() {
  return (
    <React.Fragment>
      <Route index element={<AdminDashBoardPage />} />
      <Route path="users" element={<AdminUsersPage />} />
      <Route path="books" element={<AdminBooksPage />} />
    </React.Fragment>
  );
};