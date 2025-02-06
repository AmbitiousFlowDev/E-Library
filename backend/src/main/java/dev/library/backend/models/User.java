package dev.library.backend.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;

import dev.library.backend.models.enums.Role;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true , nullable = false)
    private String username;
    private String password;

    @Column(unique = true)
    private String email;

    private String fullName;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    private List<BorrowRecord> borrowRecords;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'USER'")
    private Role role;
}
