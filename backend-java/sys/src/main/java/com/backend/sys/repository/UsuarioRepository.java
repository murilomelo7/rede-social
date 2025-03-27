package com.backend.sys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.sys.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByUsuario(String usuario);
}
