package com.example.todo.controller;

import com.example.todo.entity.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*") // CORS 허용
@RestController
@RequestMapping("/todos")
public class TodoController{

    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @GetMapping
    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        todo.setCompleted(false);
        return todoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoRepository.deleteById(id);
    }
}
