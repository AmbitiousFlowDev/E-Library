import fetchCategories from "../features/category/actions/fetchCategories";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaTag } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <nav className="navbar bg-base-100 shadow-md font-[poppins] font-bold px-18 py-6 gap-6">
      <div className="">
        <Link to={"/"} className="flex items-center text-2xl">
          <img src={logo} className="size-12" alt="a smiling book" />
          <span>B-Library</span>
        </Link>
      </div>
      <div className="flex-1">
        <SearchBar/>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to={"/books"}>
              <FaBook />
              <span>Books</span>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <MdContactSupport />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <details>
              <summary>
                <FaTag />
                <span>Categories</span>
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                {categories?.content?.map((category) => {
                  return (
                    <li key={category.id}>
                      <Link to={`/category/${category.id}`}>
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        </ul>
        <Link className="avatar avatar-placeholder" to={"/profile"}>
          <div className="bg-neutral text-neutral-content w-12 rounded-full">
            <span className="text-xs">G</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
