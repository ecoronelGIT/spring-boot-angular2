package com.sowecom.dto;

import com.sowecom.model.Location;

public class LocationDTO {
    private String address;
    private String city;
    private String country;

    public static LocationDTO getLocationDTO(Location location) {
        LocationDTO locationDTO = new LocationDTO();
        if(location != null) {
            locationDTO.setAddress(location.getAddress());
            locationDTO.setCity(location.getCity());
            locationDTO.setCountry(location.getCountry());
        }
        return locationDTO;
    }

    public String getAddress() {
        return address;
    }

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
