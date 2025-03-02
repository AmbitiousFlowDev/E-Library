import { FaSearch } from "react-icons/fa";
import Input from "../form/Input.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import fetchBooksBySearch from "../../features/book/actions/fetchBooksBySearch.js";

export default function SearchBar() {
  const { searchedBooks, loadingSearchedBooks, errorSearchedBooks } =
    useSelector((state) => state.books);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    search != "" ? dispatch(fetchBooksBySearch({ search: search })) : null;
  }, [search, dispatch]);
  return (
    <div className={"flex-1"}>
      <Input
        id={"searchedBooks"}
        icon={<FaSearch className="size-4" />}
        type={"search"}
        name={"searchedBooks"}
        list={"searchedBooksQuery"}
        onChange={(e) => setSearch(e.target.value)}
        className={"grow"}
        placeHolder={"Book , Author or Category"}
        required={false}
      />
      <datalist id="searchedBooksQuery">
        {searchedBooks.map((book) => {
          return <option>{book.title}</option>;
        })}
      </datalist>
    </div>
  );
}
