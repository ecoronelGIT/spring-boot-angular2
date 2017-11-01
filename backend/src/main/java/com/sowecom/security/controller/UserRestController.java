package com.sowecom.security.controller;

import com.sowecom.security.component.TokenUtil;
import com.sowecom.security.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserRestController {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public UserDTO getAuthenticatedUser(HttpServletRequest request) {
        if(request.getHeader(tokenHeader) != null) {
            String token = request.getHeader(tokenHeader).substring(7);
            String username = tokenUtil.getUsernameFromToken(token);
            UserDTO user = (UserDTO) userDetailsService.loadUserByUsername(username);
            return user;
        }
        return new UserDTO();
    }

}
