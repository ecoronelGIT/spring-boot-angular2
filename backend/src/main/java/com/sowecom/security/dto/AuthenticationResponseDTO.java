package com.sowecom.security.dto;

import java.io.Serializable;

public class AuthenticationResponseDTO implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;

    private final UserDTO user;

    public AuthenticationResponseDTO(String token, UserDTO user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return this.token;
    }

    public UserDTO getUser() {
        return this.user;
    }
}
