package com.sowecom.servicies;

import com.sowecom.dtos.EventDTO;
import com.sowecom.dtos.SessionDTO;
import com.sowecom.exceptions.ErrorException;
import com.sowecom.models.Event;
import com.sowecom.models.Location;
import com.sowecom.models.Session;
import com.sowecom.repositories.EventRespository;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRespository eventRespository;

    public List<EventDTO> getEvents() {
        //this.setEventsInDAO();
        return EventDTO.getEventsDTO(eventRespository.findAll());
    }

    public EventDTO getEventById(String id) {
        return EventDTO.getEventDTO(eventRespository.findOne(id));
    }

    public void saveEvent(EventDTO eventDTO) {
        Event event = new Event();
        event.setName(eventDTO.getName());
        event.setDate(eventDTO.getDate());
        event.setTime(eventDTO.getTime());
        event.setPrice(eventDTO.getPrice());
        event.setImageUrl(eventDTO.getImageUrl());
        event.setOnlineUrl(eventDTO.getOnlineUrl());
        List<Session> sessions = new ArrayList<>(0);
        List<SessionDTO> sessionDTOS = eventDTO.getSessions();
        if(sessionDTOS != null) {
            for (SessionDTO sessionDTO : sessionDTOS) {
                Session session = new Session();
                session.setId(sessionDTO.getId());
                session.setName(sessionDTO.getName());
                session.setPresenter(sessionDTO.getPresenter());
                session.setDuration(sessionDTO.getDuration());
                session.setLevel(sessionDTO.getLevel());
                session.setDetail(sessionDTO.getLevel());
                session.setVoters(sessionDTO.getVoters());
                sessions.add(session);
            }
        }
        event.setSessions(sessions);
        Location location = new Location();
        location.setAddress(eventDTO.getLocation().getAddress());
        location.setCity(eventDTO.getLocation().getCity());
        location.setCountry(eventDTO.getLocation().getCountry());
        eventRespository.save(event);
    }

    private void setEventsInDAO() {
        JSONParser parser = new JSONParser();
        try {
            ClassLoader classLoader = getClass().getClassLoader();
            File file = new File(classLoader.getResource("events.json").getFile());
            Object obj = parser.parse(new FileReader(file));
            JSONObject jsonObject = (JSONObject) obj;
            List<JSONObject> events = (List<JSONObject>) jsonObject.get("events");
            for (JSONObject json : events) {
                Event event = new Event();
                SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
                event.setDate(sdf.parse(json.get("date").toString()));
                //event.setId(json.get("id").toString());
                event.setImageUrl(json.get("imageUrl").toString());
                event.setName(json.get("name").toString());
                event.setTime(json.get("time").toString());
                event.setPrice(Double.parseDouble(json.get("price").toString()));
                event.setOnlineUrl(json.get("onlineUrl")==null?"":json.get("onlineUrl").toString());

                Location location = new Location();
                location.setAddress(((JSONObject) json.get("location")).get("address").toString());
                location.setCity(((JSONObject) json.get("location")).get("city").toString());
                location.setCountry(((JSONObject) json.get("location")).get("country").toString());
                event.setLocation(location);

                List<JSONObject> jsonSessions = (List<JSONObject>) json.get("sessions");
                List<Session> sessions = new ArrayList<>(0);
                for(JSONObject jsonSession : jsonSessions) {
                    Session session = new Session();
                    //session.setId(jsonSession.get("id").toString());
                    session.setName(jsonSession.get("name").toString());
                    session.setPresenter(jsonSession.get("presenter").toString());
                    session.setDuration(Integer.parseInt(jsonSession.get("duration").toString()));
                    session.setLevel(jsonSession.get("level").toString());
                    session.setDetail(jsonSession.get("detail").toString());
                    session.setVoters((List<String>)jsonSession.get("voters"));
                    sessions.add(session);
                }
                event.setSessions(sessions);

                eventRespository.save(event);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new ErrorException();
        }
    }

}
