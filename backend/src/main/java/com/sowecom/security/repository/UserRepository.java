package com.sowecom.security.repository;

import com.sowecom.security.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String>{

  User findByUsername(String username);

}
