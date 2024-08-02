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

import com.skillstorm.warehouse.model.Product;
import com.skillstorm.warehouse.model.Warehouse;
import com.skillstorm.warehouse.service.product.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    ProductService service;

    public ProductController(ProductService service){
        this.service = service;
    }

    @GetMapping()
    public List<Product> findAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getWarehouseByID(@PathVariable int id) {
        return service.findById(id);
    }


    @PostMapping
    public void create(@Valid @RequestBody Product product) {

        service.create(product);
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
