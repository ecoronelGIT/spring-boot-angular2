package com.sowecom.repository;

import com.sowecom.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRespository extends MongoRepository<Event, String>{

  Event findBySessionsId(String sessionId);

}
