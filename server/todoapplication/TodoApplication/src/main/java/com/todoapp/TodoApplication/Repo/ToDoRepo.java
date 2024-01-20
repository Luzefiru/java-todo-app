package com.todoapp.TodoApplication.Repo;

import com.todoapp.TodoApplication.Models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepo extends JpaRepository<Task, Long> {
}
