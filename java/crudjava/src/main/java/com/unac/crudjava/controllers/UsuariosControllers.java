package com.unac.crudjava.controllers;

import com.unac.crudjava.dto.UsuariosDTO;
import com.unac.crudjava.dto.UsuariosListDTO;
import com.unac.crudjava.services.IUsuariosServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuariosControllers {

    @Autowired
    private IUsuariosServices iUsuariosServices;

    @GetMapping("/status")
    private String status (){
        return "Servidor Corriendo";
    }

    @PostMapping("/registrar")
    public ResponseEntity<UsuariosDTO> registrar(@RequestBody UsuariosDTO usuariosDTO) {
        UsuariosDTO obj = iUsuariosServices.registrar(usuariosDTO);
        return ResponseEntity.ok(obj);
    }

    @GetMapping("/listar")
    private List<UsuariosListDTO> listar (){
        return iUsuariosServices.listar();
    }

    @DeleteMapping("/eliminar/{id}")
    private void eliminar(@PathVariable Long id) {
        iUsuariosServices.eliminar(id);
    }
}
