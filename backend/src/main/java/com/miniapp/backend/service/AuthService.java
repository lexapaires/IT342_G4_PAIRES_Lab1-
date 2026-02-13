package com.miniapp.backend.service;

import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.miniapp.backend.model.User;
import com.miniapp.backend.repository.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String registerUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            return "Error: Username is already taken!";
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            return "Error: Email is already in use!";
        }

        // Encrypt the password before saving
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));

        userRepository.save(user);
        return "User registered successfully!";
    }

    public String loginUser(String username, String rawPassword) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // Use BCrypt to match the raw password with the stored hash
            if (passwordEncoder.matches(rawPassword, user.getPasswordHash())) {
                return "Login Successful!";
            }
        }
        return "Error: Invalid username or password";
    }

    // New method for the /api/user/me endpoint
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}