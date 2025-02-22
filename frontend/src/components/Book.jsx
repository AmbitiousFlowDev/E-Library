import { Link } from "react-router-dom";

export default function Book({ book }) {
  return (
    <div className="card w-85">
      <figure className="px-6 pt-8">
        <img src={`/storage/${book.cover}`} alt="Shoes" className="rounded-md" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-1xl">
            <span className={'text-center font-[poppins] font-bold'}>{book.title}</span>
        </h2>
        {/*<div className="badge badge-primary">{book.category}</div>*/}
        {/*<div className="card-actions">*/}
        {/*  <Link className="btn btn-primary text-white font-bold" to={`/books/${book.id}`}>Show Details</Link>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
