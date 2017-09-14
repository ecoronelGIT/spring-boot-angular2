package com.sowecom.security.service;

import com.sowecom.security.dto.UserDTO;
import com.sowecom.security.model.User;
import com.sowecom.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);

        //user.setUsername("admin@mail.com");
        //user.setEnabled(true);
        //user.setLastname("LastName");
        //user.setId("2323dsafasdfsadf");
        //user.setPassword("$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi");
        //userRepository.save(user);
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return UserDTO.create(user);
        }
    }
}
