package com.railwaySystem.railwayTicketing.DTO;

import java.util.List;

public class TicketCustomerDTO {
    private String email;
    private List<TicketDTO> selectedSeat;
    private String phone;
    private String fullName;
    private String cccd;
    // Getters and setters

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getCCCD() {
        return cccd;
    }

    public void setCCCD(String CCCD) {
        this.cccd = CCCD;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<TicketDTO> getSelectedSeat() {
        return selectedSeat;
    }

    public void setSelectedSeat(List<TicketDTO> selectedSeat) {
        this.selectedSeat = selectedSeat;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}