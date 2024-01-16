package com.example.semantic;

public class ResourceConfirmation {
    private String surfaceForm;
    private String arrivalDate;
    private String departureDate;
    public ResourceConfirmation(String surfaceForm, String arrivalDate, String departureDate) {
        this.surfaceForm = surfaceForm;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
    }

    public String getSurfaceForm() {
        return surfaceForm;
    }

    public void setSurfaceForm(String surfaceForm) {
        this.surfaceForm = surfaceForm;
    }

    public String getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(String arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }
}
