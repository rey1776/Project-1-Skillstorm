package com.skillstorm.warehouse.service.warehouse;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.skillstorm.warehouse.model.Warehouse;
import com.skillstorm.warehouse.repository.WarehouseRepository;

@Service
public class WarehouseService {

    private WarehouseRepository repo;

    public WarehouseService(WarehouseRepository repo) {
        this.repo = repo;
    }

    public List<Warehouse> findAll() {
        return repo.findAll();
    }

    public Warehouse create(Warehouse warehouses) {
        System.out.println("Attempting to POST Warehouse : " + warehouses);
        return repo.save(warehouses);
    }

    public ResponseEntity<Warehouse> findById(int id) {
        Optional<Warehouse> warehouses = repo.findById(id);
        if (warehouses.isPresent())
            return ResponseEntity.ok(warehouses.get());
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public void deleteById(int id) {
        repo.deleteById(id);
    }

}
