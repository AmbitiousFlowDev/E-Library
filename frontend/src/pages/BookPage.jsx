import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { FaArrowRight } from "react-icons/fa";
import fetchBook from "../features/book/actions/fetchBook.js";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";

export default function BookPage() {
    const dispatch = useDispatch();
    const { book } = useSelector((state) => state.books);
    const {id}     = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchBook({id : id}));
    } , [dispatch]);

    return <section className={'flex flex-col px-12 mt-12'}>
        <section className={'font-[poppins] mb-12 flex flex-row justify-between'}>
            <h1 className={'text-5xl font-bold'}>Book View</h1>
            <button className={'btn btn-ghost'} onClick={() => {navigate(-1)}}>
                <FaArrowRight className={'size-8'} />
            </button>
        </section>
       <section className={'flex flex-row px-12 gap-6 card bg-base-200 py-6 border-[1.5px] border-secondary'}>
           <figure className={'rounded-md'}>
               <img src={`/storage/${book.cover}`} className={'object-cover w-80'} />
           </figure>
           <section className={'flex flex-col gap-4'}>
               <h1 className={'text-6xl font-[poppins] font-bold mb-6'}>
                   {book.title}
               </h1>
               <p>
                   <span className={'text-xl'}><span className={'font-bold'}>Description:</span> {book.description}</span>
               </p>
               <p>
                   <span className={'text-xl'}><span className={'font-bold'}>Author:</span> {book.author}</span>
               </p>
               <p className={'text-xl font-bold'}>
                   Category: <span className={'badge badge-primary text-white'} >{book.category}</span>
               </p>
               <p>
                   <span className={'text-xl'}><span className={'font-bold'}>Copies:</span> {book.copies}</span>
               </p>
               <p>
                   <Link className={'btn btn-md btn-primary text-white'} to={'/'}>Borrow</Link>
               </p>
           </section>
       </section>
    </section>
}