package com.serenityreads.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.serenityreads.Model.Book;
import com.serenityreads.service.BookService;
@RestController
@RequestMapping("/api/books")
public class BookController {
	@Autowired
	private BookService bookService;
	
	@GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PostMapping
    public Book saveBook(@RequestBody Book book) {
        return bookService.saveBook(book);
    }
}
