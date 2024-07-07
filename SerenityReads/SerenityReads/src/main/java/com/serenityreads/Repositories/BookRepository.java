package com.serenityreads.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.serenityreads.Model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
