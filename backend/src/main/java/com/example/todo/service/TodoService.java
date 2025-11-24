package com.example.todo.service;

import com.example.todo.entity.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> findAll() {
        return repo.findAll();
    }

    public Todo findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Todo create(String title) {
        Todo todo = new Todo(title);
        return repo.save(todo);
    }

    public Todo update(Long id, String title, Boolean completed) {
        Todo todo = repo.findById(id).orElse(null);
        if (todo == null) return null;

        if (title != null) todo.setTitle(title);
        if (completed != null) todo.setCompleted(completed);

        return repo.save(todo);
    }

    public boolean delete(Long id) {
        if (!repo.existsById(id)) return false;
        repo.deleteById(id);
        return true;
    }
}
