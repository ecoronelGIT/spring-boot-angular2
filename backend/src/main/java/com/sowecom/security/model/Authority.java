package com.sowecom.security.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;


@Document(collection = "users")
public class Authority {

    @Id
    private String id;

    @NotNull
    //@Enumerated(EnumType.STRING)
    private AuthorityName name;

    //@ManyToMany(mappedBy = "authorities", fetch = FetchType.LAZY)
    //private List<User> users;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public AuthorityName getName() {
        return name;
    }

    public void setName(AuthorityName name) {
        this.name = name;
    }

    //public List<User> getUsers() {
    //    return users;
    //}

    //public void setUsers(List<User> users) {
    //    this.users = users;
    //}
}