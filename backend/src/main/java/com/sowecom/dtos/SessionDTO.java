package com.sowecom.dtos;

import com.sowecom.models.Session;

import java.util.ArrayList;
import java.util.List;

public class SessionDTO {
    private String id;
    private String name;
    private String presenter;
    private int duration;
    private String level;
    private String detail;
    private List<String> voters;

    public static List<SessionDTO> getSessionsDTO(List<Session> sessions) {
        List<SessionDTO> sessionsDTOS = new ArrayList<>(0);
        for(Session session : sessions) {
            sessionsDTOS.add(getSessionDTO(session));
        }
        return sessionsDTOS;
    }

    public static SessionDTO getSessionDTO(Session session) {
        SessionDTO sessionDTO = new SessionDTO();
        sessionDTO.setId(session.getId());
        sessionDTO.setName(session.getName());
        sessionDTO.setPresenter(session.getPresenter());
        sessionDTO.setDuration(session.getDuration());
        sessionDTO.setDetail(session.getDetail());
        sessionDTO.setLevel(session.getLevel());
        sessionDTO.setVoters(session.getVoters());
        return sessionDTO;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPresenter(String presenter) {
        this.presenter = presenter;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public void setVoters(List<String> voters) {
        this.voters = voters;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getPresenter() {
        return presenter;
    }

    public int getDuration() {
        return duration;
    }

    public String getLevel() {
        return level;
    }

    public String getDetail() {
        return detail;
    }

    public List<String> getVoters() {
        return voters;
    }

}
