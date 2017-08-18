package com.sowecom.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "locations")
public class Location {
    private String address;
    private String city;
    private String country;

    public String getAddress() { return address; }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
