package com.sowecom.repository;

import com.sowecom.model.Session;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SessionRespository extends MongoRepository<Session, String>{

  List<Session> findByNameIgnoreCaseLike(String sessionsName);
}
