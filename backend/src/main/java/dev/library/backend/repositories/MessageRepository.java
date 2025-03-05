package dev.library.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.library.backend.entities.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}