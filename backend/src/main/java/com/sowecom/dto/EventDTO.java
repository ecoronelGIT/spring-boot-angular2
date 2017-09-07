package com.sowecom.dto;

import com.sowecom.model.Event;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EventDTO {
    private String id;
    private String name;
    private Date date;
    private String time;
    private double price;
    private String imageUrl;
    private String onlineUrl;
    private List<SessionDTO> sessions;
    private LocationDTO location;

    public static List<EventDTO> getEventsDTO(List<Event> events) {
        List<EventDTO> eventsDTO = new ArrayList<>(0);
        for(Event event : events) {
            eventsDTO.add(getEventDTO(event));
        }
        return eventsDTO;
    }

    public static EventDTO getEventDTO(Event event) {
        EventDTO eventDTO = new EventDTO();
        eventDTO.setId(event.getId());
        eventDTO.setName(event.getName());
        eventDTO.setDate(event.getDate());
        eventDTO.setTime(event.getTime());
        eventDTO.setPrice(event.getPrice());
        eventDTO.setImageUrl(event.getImageUrl());
        eventDTO.setOnlineUrl(event.getOnlineUrl());
        eventDTO.setSessions(SessionDTO.getSessionsDTO(event.getSessions()));
        eventDTO.setLocation(LocationDTO.getLocationDTO(event.getLocation()));
        return eventDTO;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getOnlineUrl() {
        return onlineUrl;
    }

    public void setOnlineUrl(String onlineUrl) {
        this.onlineUrl = onlineUrl;
    }

    public List<SessionDTO> getSessions() {
        return sessions;
    }

    public void setSessions(List<SessionDTO> sessions) {
        this.sessions = sessions;
    }

    public LocationDTO getLocation() {
        return location;
    }

    public void setLocation(LocationDTO location) {
        this.location = location;
    }
}