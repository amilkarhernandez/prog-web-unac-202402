package com.unac.crudjava.services;

import com.unac.crudjava.dto.UsuariosDTO;
import com.unac.crudjava.dto.UsuariosListDTO;

import java.util.List;

public interface IUsuariosServices {

    UsuariosDTO registrar(UsuariosDTO usuariosDTO);

    List<UsuariosListDTO> listar();

    void eliminar(Long id);
}
