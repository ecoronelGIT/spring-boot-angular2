package com.sowecom.security.dto;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.sowecom.security.model.Authority;
import com.sowecom.security.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDTO implements UserDetails {

    private String id;
    private String username;
    private String firstname;
    private String lastname;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private boolean enabled;
    private Date lastPasswordResetDate;

    public UserDTO() {}

    public UserDTO(String id, String username, String firstname, String lastname,
          String password, Collection<? extends GrantedAuthority> authorities,
          boolean enabled, Date lastPasswordResetDate
    ) {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.authorities = authorities;
        this.enabled = enabled;
        this.lastPasswordResetDate = lastPasswordResetDate;
    }

    public static UserDTO create(User user) {
        return new UserDTO(
          user.getId(),
          user.getUsername(),
          user.getFirstname(),
          user.getLastname(),
          user.getPassword(),
          mapToGrantedAuthorities(user.getAuthorities()),
          user.getEnabled(),
          user.getLastPasswordResetDate()
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
        if(authorities != null) {
            return authorities.stream()
              .map(authority -> new SimpleGrantedAuthority(authority.getName().name()))
              .collect(Collectors.toList());
        } else {
            return new ArrayList<>(0);
        }
    }

    @JsonIgnore
    public String getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    @JsonIgnore
    public Date getLastPasswordResetDate() {
        return lastPasswordResetDate;
    }
}
