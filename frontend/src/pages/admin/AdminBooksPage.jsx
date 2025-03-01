import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import  fetchBooks  from "../../features/book/actions/fetchBooks"; 
import PageNavigator from "../../components/navigation/PageNavigator";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination"; 
import headers from "../../constants/headers.json";

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
    <section className="w-full mt-12">
      <PageNavigator title={"Books"} path={-1} />
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      ) : (
        <section className="mt-12">
          <Table
            headers={headers.book.header}
            data={books?.content || []} // Use the fetched data
            columns={headers.book.keys}
          />
        </section>
      )}
      <div className="mt-12 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}