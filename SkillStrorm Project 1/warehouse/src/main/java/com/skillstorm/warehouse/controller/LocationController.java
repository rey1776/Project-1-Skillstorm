package com.skillstorm.warehouse.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.warehouse.model.Location;
import com.skillstorm.warehouse.service.location.LocationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/location")
@CrossOrigin
public class LocationController {

    LocationService service;

    public LocationController(LocationService service){
        this.service = service;
    }

    @GetMapping()
    public  List<Location> findAll() {
        return  service.findAll();
    } 

    @GetMapping("/{id}")
    public ResponseEntity<Location> getLocationByID(@PathVariable int id ){
        return service.findById(id);
    }

    @PostMapping()
    public Location create(@Valid @RequestBody Location location) {

        return service.create(location);
    }

    @DeleteMapping
    public void deleteById(int id){
        service.deleteById(id);
    }

    
    @DeleteMapping("/{id}")
    public void deleteByIdPath(@PathVariable int id){
        service.deleteById(id);
    }


}
