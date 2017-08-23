package com.sowecom.repositories;

import com.sowecom.models.Event;
import com.sowecom.models.Session;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRespository extends MongoRepository<Event, String>{

  Event findBySessionsId(String sessionId);

}
