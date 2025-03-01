import {Outlet} from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";

export default function AdminRootLayout() {
    return <main className="flex flex-row gap-6">
        <aside>
            <Sidebar/>
        </aside>
        <section className="bg-base-100 flex-grow px-6">
            <Outlet/>
        </section>
    </main>
}