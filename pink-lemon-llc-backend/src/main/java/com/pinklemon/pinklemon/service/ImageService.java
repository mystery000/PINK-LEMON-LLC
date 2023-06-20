package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Image;
import com.pinklemon.pinklemon.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public List<Image> findImagesByEmail(String email) {
        return imageRepository.findImagesByEmail(email);
    }

    public boolean existsImageByEmail(String email) {
        return imageRepository.existsImageByEmail(email);
    }

    public void save(Image image) {
        imageRepository.save(image);
    }
}
