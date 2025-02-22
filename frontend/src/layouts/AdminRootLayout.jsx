import {Outlet} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";

export default function AdminRootLayout() {
    return <main>
        <aside>
            <Sidebar/>
        </aside>
        <section>
            <Outlet/>
        </section>
    </main>
}