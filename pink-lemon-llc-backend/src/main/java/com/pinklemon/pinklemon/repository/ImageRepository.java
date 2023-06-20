package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findImagesByEmail (String email);

    Boolean existsImageByEmail(String email);

}