package com.skillstorm.warehouse.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Size(min=1,max=70, message = "Must be between 1 - 70 characters.")
    private String address;

    @NotNull
    @Size(min=1,max=50, message = "Must be between 1 - 50 characters.")
    private String city;

    @NotNull
    @Size(min=1,max=2, message = "Must be between 1 - 2 characters (State Abbreviations).")
    private String state;

    @NotNull
    @Size(min=1,max=30, message = "Must be between 1 - 30 characters.")
    private String country;
    
}
