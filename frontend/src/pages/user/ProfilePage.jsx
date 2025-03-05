import { FaArrowRight } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import Avatar from "../../components/navbar/Avatar.jsx";
import PageNavigator from "../../components/navigation/PageNavigator.jsx";
import { useDispatch, useSelector } from "react-redux";
import fetchUserBorrowRecords from "../../features/borrowRecord/actions/fetchUserBorrowRecords.js";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  const { userBooks, loadingUserBooks, errorUserBooks } = useSelector(
    (state) => state.borrowRecords
  );

  useEffect(() => {
    if (user?.sub) {
      dispatch(fetchUserBorrowRecords(user.id));
    }
  }, [dispatch, user]);

  return (
    <section className={"container flex flex-col px-12 mt-12"}>
      <PageNavigator title={"Profile"} path={-1} />
      <div className="tabs tabs-border font-[poppins]">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-xl"
          aria-label="Info"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <p>
            <span>ID:&nbsp; </span>
            <span>{user.id}</span>
          </p>
          <p>
            <span>ROLE:&nbsp; </span>
            <span>{user.role}</span>
          </p>
          <p>
            <span>USERNAME:&nbsp; </span>
            <span>{user.sub}</span>
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-xl"
          aria-label="Borrowed Books"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {loadingUserBooks && <p>Loading borrowed books...</p>}
          {errorUserBooks && (
            <p className="text-red-500">Error: {errorUserBooks}</p>
          )}
          {userBooks.length > 0 ? (
            <ul>
              {userBooks.map((book) => (
                <li key={book.id} className="mb-4">
                  <h3 className="font-bold">{book.title}</h3>
                  <p>Author: {book.author}</p>
                  <p>Category: {book.category}</p>
                </li>
              ))}
            </ul>
          ) : (
            !loadingUserBooks && <p>No books borrowed.</p>
          )}
        </div>
      </div>
    </section>
  );
}
