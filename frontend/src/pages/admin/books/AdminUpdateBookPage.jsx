import { useParams } from "react-router-dom";
import PageNavigator from "../../../components/navigation/PageNavigator";
import Page from "../../Page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import fetchBook from "../../../features/book/actions/fetchBook";
import BookForm from "../../../components/form/book/BookForm";
import Image from "../../../components/image/Image";
import Loader from "../../../components/loader/Loader";

export default function AdminUpdateBookPage() {
  const { id } = useParams();
  document.title = `E-Library - Edit #${id}`;
  const dispatch = useDispatch();
  const { book, loadingBook, errorBook } = useSelector((state) => state.books);
  const [data, setData] = useState({});
  useEffect(() => {
    dispatch(fetchBook({ id: id }));
  }, [id, dispatch]);
  useEffect(() => {
    if (book) {
      setData({
        title: book.title,
        description: book.description,
        isbn: book.isbn,
        author: book.author,
        copies: book.copies,
        category: book.category,
      });
    }
  }, [book]);
  return (
    <Page className="container flex flex-col px-12 mt-12">
      <PageNavigator title={`Update Book #${id}`} path={-1} />
      {loadingBook ? (
        <Loader />
      ) : (
        <section className="flex flex-row justify-center">
          <BookForm
            data={data}
            loading={loadingBook}
            setData={setData}
            error={errorBook}
            submitValueText={"Update"}
          />
          <Image className="w-1/4 rounded-md" src={`/storage/${book.cover}`} />
        </section>
      )}
    </Page>
  );
}
