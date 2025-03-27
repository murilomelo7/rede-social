package com.backend.sys.config;

import com.backend.sys.dto.LoginRequest;
import com.backend.sys.entity.Usuario;
import com.backend.sys.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthConfig {

    @Autowired
    private UsuarioRepository usuarioRepository; // Repositório de usuários

    // Método para autenticar o usuário
    // public String authenticateUser(LoginRequest loginRequest) {
    // // Verifica se o usuário existe
    // Usuario usuario = usuarioRepository.findByUsuario(loginRequest.getUsuario());
    // // Alterado para 'usuario' como
    // // chave de login
    // return "Usuário encontrado: "; // Exemplo simples

    // }
}
