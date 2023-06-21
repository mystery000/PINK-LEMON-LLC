package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.Image;
import com.pinklemon.pinklemon.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public List<Image> findImagesByEmailIgnoreCase(String email) {
        return imageRepository.findImagesByEmailIgnoreCase(email);
    }

    public boolean existsImageByEmailIgnoreCase(String email) {
        return imageRepository.existsImageByEmailIgnoreCase(email);
    }

    public void save(Image image) {
        imageRepository.save(image);
    }

}
