import {useDispatch, useSelector} from "react-redux";
import {useEffect}                from "react";
import fetchBook                  from "../features/book/actions/fetchBook.js";
import {useParams}                from "react-router-dom";
import PageNavigator              from "../components/navigation/PageNavigator.jsx";
import BookDetails                from "../components/book/BookDetails.jsx";

export default function BookPage() 
{
    const dispatch = useDispatch();
    const { book } = useSelector((state) => state.books);
    const {id}     = useParams();

    useEffect(() => {
        dispatch(fetchBook({id : id}));
    } , [dispatch]);

    document.title = `E-Library - ${book.title}`

    return <section className={'container flex flex-col px-12 mt-12'}>
        <PageNavigator title={'Book View'} path={-1} />
        <BookDetails book={book} />
    </section>
}