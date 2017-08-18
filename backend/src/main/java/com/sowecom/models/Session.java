package com.sowecom.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "sessions")
public class Session {
    @Id
    private String id;
    private String name;
    private String presenter;
    private int duration;
    private String level;
    private String detail;
    private List<String> voters;

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
