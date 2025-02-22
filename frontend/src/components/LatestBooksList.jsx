import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import fetchLatestBooks from "../features/book/actions/fetchLatestBooks.js";
import Book from "./Book.jsx";

export default function LatestBooksList() {
    const dispatch = useDispatch();
    const {latestBooks, loadingTopBooks} = useSelector(state => state.books);
    useEffect(() => {
        dispatch(fetchLatestBooks());
    }, []);
    return <section className="flex flex-col items-center justify-center mb-12">
        <h1 className={'text-4xl font-[poppins] font-bold'}>Latest Books</h1>
        <section className={'flex flex-row items-center justify-center'}>
            {latestBooks.map(book => <Book key={book.id} book={book} />)}
        </section>
    </section>
}