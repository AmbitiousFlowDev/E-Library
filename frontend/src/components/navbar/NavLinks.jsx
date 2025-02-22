import {Link, useNavigate} from "react-router-dom";
import {FaBook, FaSignInAlt} from "react-icons/fa";
import {MdAdminPanelSettings, MdContactSupport} from "react-icons/md";
import {FaTag} from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import fetchCategories from "../../features/category/actions/fetchCategories.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import {logout} from "../../features/auth/AuthReducer.js";

export default function NavLinks() {
    const { isAuthenticated , user  } = useContext(AuthContext)
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(
        (state) => state.categories
    );
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const handleLogout = () => {
        dispatch(logout());
    }
    return <ul className="menu menu-horizontal px-1 gap-2">
        <li>
            <Link to={"/books"}>
                <FaBook className={'size-5'} />
                <span>Books</span>
            </Link>
        </li>
        <li>
            <Link to={"/contact"}>
                <MdContactSupport className={'size-5'} />
                <span>Contact</span>
            </Link>
        </li>
        {
            user?.role === "LIBRARIAN" ? <li>
                <Link to={"/admin"}>
                    <MdAdminPanelSettings  className={'size-5'} />
                    <span>Admin</span>
                </Link>
            </li> : null
        }
        <li>
            <details>
                <summary>
                    <FaTag className={'size-5'} />
                    <span>Categories</span>
                </summary>
                <ul className="rounded-t-none p-2 z-[2]">
                    {categories?.content?.map((category) => {
                        return (
                            <li key={category.id}>
                                <span>{category.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </details>
        </li>
        {
            !isAuthenticated ? <Link to={"/login"} className={'btn btn-sm btn-primary'}>
                <FaSignInAlt /><span>Sign in</span>
            </Link> : <button onClick={handleLogout} className={'btn btn-sm bg-error border-none font-bold text-white'}>Logout</button>
        }
    </ul>
}