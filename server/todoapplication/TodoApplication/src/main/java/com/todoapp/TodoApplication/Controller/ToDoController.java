package com.todoapp.TodoApplication.Controller;

import com.todoapp.TodoApplication.Repo.ToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.todoapp.TodoApplication.Models.Task;

@RestController
@RequestMapping("/api")
public class ToDoController {

    @Autowired
    private ToDoRepo todorepo;

    @GetMapping(value = "/todos")
    public List<Task> getAllToDos() {
        return todorepo.findAll();
    }

    @GetMapping(value = "/todos/{taskID}")
    public Optional<Task> getTodoById(@PathVariable long taskID) {
        return todorepo.findById(taskID);
    }

    @PostMapping(value = "/todos")
    public String createToDo(@RequestBody Task task) {
        todorepo.save(task);
        return "Task created!";
    }

    @PutMapping(value = "/todos/{taskID}")
    public ResponseEntity<String> updateTodo(@PathVariable long taskID, @RequestBody Task task) {
        Optional<Task> optionalTask = todorepo.findById(taskID);

        if (optionalTask.isPresent()) {
            Task updatedTodo = optionalTask.get();
            updatedTodo.setTitle(task.getTitle());
            updatedTodo.setDescription(task.getDescription());
            updatedTodo.setDue_date(task.getDue_date());
            updatedTodo.setIs_completed(task.isIs_completed());

            // Save the updated task to the database
            todorepo.save(updatedTodo);

            return ResponseEntity.ok("Task updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Task not found with ID: " + taskID);
        }
    }

    @DeleteMapping(value = "/todos/{taskID}")
    public String deleteTodoById(@PathVariable long taskID) {
        Task deleteTodo = todorepo.findById(taskID).get();
        todorepo.delete(deleteTodo);
        return "Deleted task with the id: " + taskID;
    }
}
