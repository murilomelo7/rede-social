package com.backend.sys.service;

import com.backend.sys.dto.LoginRequest;
import com.backend.sys.entity.Usuario;
import com.backend.sys.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository userRepository; // Repositório de usuários (deve ser criado)

    public String authenticateUser(LoginRequest loginRequest) {
        // A lógica de autenticação pode ser mais complexa, com verificação de senha
        Usuario user = userRepository.findByUsuario(loginRequest.getUsuario());

        return "aaaaaaaaaaaaa";
        // if (user != null && user.getSenha().equals(loginRequest.getSenha())) {
        // // Aqui você pode gerar um JWT ou qualquer outro tipo de token
        // return "JWT-TOKEN"; // Exemplo de token gerado
        // } else {
        // throw new RuntimeException("Invalid credentials");
        // }
    }
}
