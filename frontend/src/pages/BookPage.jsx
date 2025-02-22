import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FaArrowRight, FaHandHolding} from "react-icons/fa";
import fetchBook from "../features/book/actions/fetchBook.js";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import {IoMdAddCircle} from "react-icons/io";

export default function BookPage() {
    const dispatch = useDispatch();
    const { book } = useSelector((state) => state.books);
    const {id}     = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchBook({id : id}));
    } , [dispatch]);

    return <section className={'container flex flex-col px-12 mt-12'}>
        <section className={'font-[poppins] mb-12 flex flex-row justify-between'}>
            <h1 className={'text-5xl font-bold'}>Book View</h1>
            <button className={'btn btn-ghost'} onClick={() => {navigate(-1)}}>
                <FaArrowRight className={'size-8'} />
            </button>
        </section>
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className={'object-cover w-[18rem]'}>
                <img src={`/storage/${book.cover}`} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{book.title}</h2>
                <p>
                    {book.description}
                    <p>Category : <span className={'badge-info badge'} >{book.category}</span></p>
                    <p>Copies : {book.copies}</p>
                </p>

                <div className="card-actions justify-end">
                    <button className="btn btn-info flex items-center">
                        <IoMdAddCircle className={'size-6'} />
                        <span>Borrow</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
}