package com.miniapp.backend.repository;

import com.miniapp.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Used to check if account already exists (Activity Diagram logic)
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    
    // Used for Login
    Optional<User> findByUsername(String username);
}