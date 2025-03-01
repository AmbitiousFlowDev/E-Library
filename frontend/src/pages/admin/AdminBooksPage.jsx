import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../features/book/actions/fetchBooks";
import PageNavigator from "../../components/navigation/PageNavigator";

import Pagination from "../../components/pagination/Pagination";
import BooksTable from "../../components/admin/table/BooksTable";
import { Link } from "react-router-dom";

export default function AdminBooksPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const { books, loading, error } = useSelector((state) => state.books);

  const handlePageChange = (page) => {
    setCurrentPage(page - 1);
    fetchData(page - 1);
  };

  const fetchData = useCallback(
    (page) => {
      dispatch(fetchBooks({ page, size: 5, sortBy: "title" }));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  useEffect(() => {
    if (books?.page?.totalPages) {
      setTotalPages(books.page.totalPages);
    }
  }, [books]);

  return (
    <section className="w-full mt-12 p-6">
      <PageNavigator title={"Books Manager"} path={-1} />
      <BooksTable books={books?.content} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <section className="mt-12 flex flex-row justify-end">
        <Link to={"create"} className="btn btn-sm btn-primary">
          Create Book
        </Link>
      </section>
    </section>
  );
}
