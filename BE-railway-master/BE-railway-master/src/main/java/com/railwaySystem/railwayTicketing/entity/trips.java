package com.railwaySystem.railwayTicketing.entity;

import jakarta.persistence.*;

import java.util.Date;
import java.util.Set;

@Entity(name="trips")
public class trips {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "trip_id")
    private int trip_id;

    @Column(name = "origin")
    private String origin;

    @Column(name = "destination")
    private String destination;

    @Column(name = "departure_time")
    private Date departure_time;

    @Column(name = "arrival_time")
    private Date arrival_time;

    @Column(name = "fare")
    private int fare;

    public int getTrip_id() {
        return trip_id;
    }

    public void setTrip_id(int trip_id) {
        this.trip_id = trip_id;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public Date getDeparture_time() {
        return departure_time;
    }

    public void setDeparture_time(Date departure_time) {
        this.departure_time = departure_time;
    }

    public Date getArrival_time() {
        return arrival_time;
    }

    public void setArrival_time(Date arrival_time) {
        this.arrival_time = arrival_time;
    }

    public int getFare() {
        return fare;
    }

    public void setFare(int fare) {
        this.fare = fare;
    }
}
