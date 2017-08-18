package com.sowecom.controllers;

import com.sowecom.dtos.EventDTO;
import com.sowecom.exceptions.ErrorException;
import com.sowecom.models.Event;
import com.sowecom.models.Location;
import com.sowecom.models.Session;
import com.sowecom.servicies.EventService;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileReader;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @CrossOrigin
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<EventDTO> getEvents() {
        return eventService.getEvents();
    }

    @CrossOrigin
    @RequestMapping(value = "findById/{id}", method = RequestMethod.GET)
    public EventDTO getEventById(@PathVariable("id") String id) {
        return eventService.getEventById(id);
    }

    @CrossOrigin
    @RequestMapping(value = "save", method = RequestMethod.POST)
    public void saveEvent(@RequestBody EventDTO event) {
        eventService.saveEvent(event);
    }
}