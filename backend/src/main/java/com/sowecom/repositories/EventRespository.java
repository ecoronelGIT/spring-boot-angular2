package com.sowecom.repositories;

import com.sowecom.models.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRespository extends MongoRepository<Event, String>{

}
