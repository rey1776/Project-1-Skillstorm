package com.skillstorm.warehouse.model;

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Size(min=1,max=50, message = "Must be between 1 - 50 characters.")
    @Column(name="product_description")
    private String productDescription;

    @NotNull
    @Size(min=1,max=50, message = "Must be between 1 - 50 characters.")
    @Column(name = "productname")
    private String productName;

    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @JoinColumn(name="warehouse_id")
    @JsonIdentityReference(alwaysAsId = true)
    Warehouse warehouse;

}
