import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import fetchLatestBooks from "../../features/book/actions/fetchLatestBooks.js";
import BookPreview from "./BookPreview.jsx";
import {Link} from "react-router-dom";

export default function LatestBooksList() {
    const dispatch = useDispatch();
    const {latestBooks, loadingTopBooks} = useSelector(state => state.books);
    useEffect(() => {
        dispatch(fetchLatestBooks());
    }, []);
    return <section className={"flex flex-col items-center justify-center mb-12 rounded-md mt-12"}>
        <h1 className={'text-4xl font-[poppins] font-bold'}>Latest Books</h1>
        <section className={'flex flex-row items-center justify-center'}>
            {latestBooks.map(book => <Link to={`/books/${book.id}`}>
                <BookPreview key={book.id} book={book} />
            </Link>)}
        </section>
    </section>
}