package com.railwaySystem.railwayTicketing.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

// TrainCar.java
@Entity
@Table(name = "train_cars")
public class TrainCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "occupied")
    private int occupied;

    @Column(name = "seats")
    private int seats;

    @Column(name = "cols_car")
    private int colsCar;

    @Column(name = "rows_car")
    private int rowsCar;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="train_trip_id")
    private TrainTrip trainTrip;

    @JsonManagedReference
    @OneToMany(mappedBy = "trainCar")
    private List<TrainSeat> seatList;


//     getters and setters

    public TrainTrip getTrainTrip() {
        return trainTrip;
    }

    public void setTrainTrip(TrainTrip trainTrip) {
        this.trainTrip = trainTrip;
    }

    public List<TrainSeat> getSeatList() {
        return seatList;
    }

    public void setSeatList(List<TrainSeat> seatList) {
        this.seatList = seatList;
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

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getOccupied() {
        return occupied;
    }

    public void setOccupied(int occupied) {
        this.occupied = occupied;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public int getColsCar() {
        return colsCar;
    }

    public void setColsCar(int colsCar) {
        this.colsCar = colsCar;
    }

    public int getRowsCar() {
        return rowsCar;
    }

    public void setRowsCar(int rowsCar) {
        this.rowsCar = rowsCar;
    }

}