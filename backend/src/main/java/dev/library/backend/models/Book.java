package dev.library.backend.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cover;
    private String title;

//    @OneToOne(cascade = CascadeType.ALL)
//    private Category category;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BorrowRecord> borrowRecords = new ArrayList<>();

    private String author;
    private String description;
    private String isbn;
    private int copies;

    public void addBorrowRecord(BorrowRecord borrowRecord) {
        borrowRecords.add(borrowRecord);
        borrowRecord.setBook(this);
    }

    public void removeBorrowRecord(BorrowRecord borrowRecord) {
        borrowRecords.remove(borrowRecord);
        borrowRecord.setBook(null);
    }
}
