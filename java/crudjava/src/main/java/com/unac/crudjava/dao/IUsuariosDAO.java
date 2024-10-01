package com.unac.crudjava.dao;

import com.unac.crudjava.entities.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuariosDAO extends JpaRepository<Usuarios, Long> {
}
