import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <label className="input w-full outline-offset-1 ">
      <FaSearch className="size-4"/>
      <input type="search" className="grow" placeholder="Search"  />
    </label>
  );
}
