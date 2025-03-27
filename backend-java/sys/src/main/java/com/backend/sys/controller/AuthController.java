package com.backend.sys.controller;

import com.backend.sys.dto.LoginRequest;
import com.backend.sys.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // String token = authService.authenticateUser(loginRequest);
        return ResponseEntity.ok("Token: "); // Aqui você retornaria o JWT ou outra resposta
    }
}
