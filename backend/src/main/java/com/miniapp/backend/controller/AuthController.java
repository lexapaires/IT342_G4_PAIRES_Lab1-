package com.miniapp.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.miniapp.backend.model.User;
import com.miniapp.backend.service.AuthService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") 
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/auth/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        String result = authService.registerUser(user);
        if (result.startsWith("Error")) {
            return ResponseEntity.badRequest().body(result);
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        // Authenticate using the service's BCrypt logic
        String result = authService.loginUser(loginRequest.getUsername(), loginRequest.getPasswordHash());

        if (result.equals("Login Successful!")) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(401).body(result);
        }
    }

    // Required endpoint: GET /api/user/me (protected)
    // Note: In a production app, the username would be extracted from a JWT token.
    @GetMapping("/user/me")
    public ResponseEntity<?> getCurrentUser(@RequestParam String username) {
        Optional<User> user = authService.getUserByUsername(username);
        
        if (user.isPresent()) {
            // Remove sensitive password hash before sending to frontend
            User userProfile = user.get();
            userProfile.setPasswordHash(null); 
            return ResponseEntity.ok(userProfile);
        } else {
            return ResponseEntity.status(404).body("Error: User not found.");
        }
    }
}