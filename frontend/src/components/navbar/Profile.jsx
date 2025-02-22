import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

export default function Profile() {
    const {user} = useContext(AuthContext)
    return <Link className="avatar avatar-placeholder" to={"/profile"}>
        <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <span className="text-xs">{user ? user.sub.charAt(0).toUpperCase() : "G"}</span>
        </div>
    </Link>
}