package com.skillstorm.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.warehouse.model.Location;

public interface LocationRepository extends JpaRepository<Location, Integer>{

}
