package com.skillstorm.warehouse.service.product;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.skillstorm.warehouse.model.Product;
import com.skillstorm.warehouse.repository.ProductRepository;

@Service
public class ProductService {

    ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public void create(Product product) {
        repo.save(product);
    }

    public List<Product> findAll() {
        return repo.findAll();
    }

    public ResponseEntity<Product> findById(int id) {
        Optional<Product> product = repo.findById(id);
        if (product.isPresent())
            return ResponseEntity.ok(product.get());
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    public void deleteById(int id) {
        repo.deleteById(id);
    }

}
