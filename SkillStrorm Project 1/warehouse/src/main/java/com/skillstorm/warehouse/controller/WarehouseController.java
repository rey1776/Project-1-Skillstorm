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
import com.skillstorm.warehouse.model.Warehouse;
import com.skillstorm.warehouse.service.warehouse.WarehouseService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/warehouse")
@CrossOrigin
public class WarehouseController {

    WarehouseService service;

    public WarehouseController(WarehouseService service){
        this.service = service;
    }

    @GetMapping()
    public List<Warehouse> findAll() {

        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Warehouse> getWarehouseByID(@PathVariable int id) {
        return service.findById(id);
    }

    @PostMapping
    public void create(@Valid @RequestBody Warehouse warehouses) {

        service.create(warehouses);
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
