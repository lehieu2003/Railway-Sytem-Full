package com.railwaySystem.railwayTicketing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jdk.jshell.Snippet;

@Entity
@Table(name = "train_seats")
public class TrainSeat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "seat_index")
    private int seatIndex;

    @Column(name = "price")
    private int price;

    @Column(name = "from_station")
    private String fromStation;

    @Column(name = "to_station")
    private String toStation;

    @Column(name = "name_car")
    private String nameCar;

    @Column(name = "time_start")
    private String timeStart;

    @Column(name = "seat_chair")
    private String seatChair;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="car_id")
    private TrainCar trainCar;

    public enum Status {
        order, empty
    }


    // getters and setters


    public String getSeatChair() {
        return seatChair;
    }

    public void setSeatChair(String seatChair) {
        this.seatChair = seatChair;
    }

    public String getFromStation() {
        return fromStation;
    }

    public void setFromStation(String fromStation) {
        this.fromStation = fromStation;
    }

    public String getToStation() {
        return toStation;
    }

    public void setToStation(String toStation) {
        this.toStation = toStation;
    }

    public String getNameCar() {
        return nameCar;
    }

    public void setNameCar(String nameCar) {
        this.nameCar = nameCar;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public int getSeatIndex() {
        return seatIndex;
    }

    public void setSeatIndex(int seatIndex) {
        this.seatIndex = seatIndex;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public TrainCar getTrainCar() {
        return trainCar;
    }

    public void setTrainCar(TrainCar trainCar) {
        this.trainCar = trainCar;
    }



}
