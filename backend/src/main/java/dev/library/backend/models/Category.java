package dev.library.backend.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

//    @OneToOne(mappedBy = "category")
//    private Book book;

//    public void addBook(Book book) {
//        books.add(book);
//        book.setCategory(this);
//    }
//
//    public void removeBook(Book book) {
//        books.remove(book);
//        book.setCategory(null);
//    }
}
