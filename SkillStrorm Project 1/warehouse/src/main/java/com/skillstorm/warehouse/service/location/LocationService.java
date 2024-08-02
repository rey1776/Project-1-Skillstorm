package com.skillstorm.warehouse.service.location;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.skillstorm.warehouse.model.Location;
import com.skillstorm.warehouse.repository.LocationRepository;

@Service
public class LocationService {

    LocationRepository repo;

    public LocationService(LocationRepository repo){
        this.repo = repo;
    }

    public List<Location> findAll(){
        return repo.findAll();
    }

    public ResponseEntity<Location> findById(int id){
            Optional<Location> warehouse = repo.findById(id);
            if(warehouse.isPresent())
                return ResponseEntity.ok(warehouse.get());
            else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    public Location create(Location location){
            return repo.save(location);
        }

    public void deleteById(int id){
            repo.deleteById(id);
        }
}
