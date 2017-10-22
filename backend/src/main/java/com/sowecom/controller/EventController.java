package com.sowecom.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sowecom.dto.EventDTO;
import com.sowecom.dto.SessionDTO;
import com.sowecom.exception.ErrorException;
import com.sowecom.service.EventService;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<EventDTO> findAllEvents() {
        return eventService.findAllEvents();
    }

    @RequestMapping(value = "/findById/{id}", method = RequestMethod.GET)
    public EventDTO findEventById(@PathVariable("id") String id) {
        return eventService.findEventById(id);
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void saveEvent(@RequestBody EventDTO event) {
        eventService.saveEvent(event);
    }

    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public void updateEvent(@RequestBody JSONObject json) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            SessionDTO session = mapper.readValue(json.get("session").toString(), SessionDTO.class);
            eventService.updateEvent(json.get("id").toString(), session);
        } catch (IOException io) {
            throw new ErrorException();
        }
    }

    @RequestMapping(value = "/sessionByName/{name}", method = RequestMethod.GET)
    public List<SessionDTO> findSessionByName(@PathVariable("name") String name) {
        return eventService.findSessionByName(name);
    }

    @RequestMapping(value = "/findEventBySessionId/{id}", method = RequestMethod.GET)
    public EventDTO findEventBySessionId(@PathVariable("id") String id) {
        return eventService.findEventBySessionId(id);
    }

    @RequestMapping(value = "/session/voters/{sessionId}/{voterName}", method = RequestMethod.POST)
    public void addVoter(@PathVariable("sessionId") String sessionId, @PathVariable("voterName") String voterName) {
        eventService.addVoter(sessionId, voterName);
    }

    @RequestMapping(value = "/session/voters/{sessionId}/{voterName}", method = RequestMethod.DELETE)
    public void deleteVoter(@PathVariable("sessionId") String sessionId, @PathVariable("voterName") String voterName) {
        eventService.deleteVoter(sessionId, voterName);
    }

    @RequestMapping(value = "/loadEvents", method = RequestMethod.GET)
    public List<JSONObject> loadEvents() { return eventService.setEventsInDAO(); }

}