package dev.library.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.library.backend.models.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {}