package com.unac.crudjava.services.impl;

import com.unac.crudjava.dao.IUsuariosDAO;
import com.unac.crudjava.dto.UsuariosDTO;
import com.unac.crudjava.dto.UsuariosListDTO;
import com.unac.crudjava.entities.Usuarios;
import com.unac.crudjava.services.IUsuariosServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuariosServicesImpl implements IUsuariosServices {

    @Autowired
    private IUsuariosDAO iUsuariosDAO;
    @Override
    public UsuariosDTO registrar(UsuariosDTO usuariosDTO) {
        Usuarios obj = new Usuarios();
        obj.setUsername(usuariosDTO.getUsername());
        obj.setEmail(usuariosDTO.getEmail());
        obj.setPassword(usuariosDTO.getPassword());

        obj = iUsuariosDAO.save(obj);

        return usuariosDTO;
    }

    @Override
    public List<UsuariosListDTO> listar() {
        List<UsuariosListDTO> listResponse = new ArrayList<>();
        List<Usuarios> listUsuarios = new ArrayList<>();
        listUsuarios = iUsuariosDAO.findAll();

        for(Usuarios u : listUsuarios){
            UsuariosListDTO obj = new UsuariosListDTO();
            obj.setId(u.getId());
            obj.setUsername(u.getUsername());
            obj.setEmail(u.getEmail());
            obj.setPassword(u.getPassword());

            listResponse.add(obj);
        }

        return listResponse;
    }

    @Override
    public void eliminar(Long id) {
        iUsuariosDAO.deleteById(id);
    }
}
