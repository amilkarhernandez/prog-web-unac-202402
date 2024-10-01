package com.unac.crudjava.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UsuariosListDTO {
    private Long id;
    private String username;
    private String password;
    private String email;
}
