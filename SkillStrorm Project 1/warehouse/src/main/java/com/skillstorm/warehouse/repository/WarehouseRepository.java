package com.skillstorm.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.warehouse.model.Warehouse;

public interface WarehouseRepository extends JpaRepository<Warehouse, Integer>{

}
