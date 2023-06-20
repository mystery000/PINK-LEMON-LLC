package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.model.*;
import com.pinklemon.pinklemon.service.ImageService;
import com.pinklemon.pinklemon.service.UtenteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @Autowired
    private UtenteService utenteService;

    @Value("${openai.api-key}")
    private String apiKey;

    @Value("${openai.api-url}")
    private String apiUrl;
    @GetMapping
    public ResponseEntity<?> findImagesByEmail() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = userDetails.getUsername();
        if(!imageService.existsImageByEmail(email)) {
            return new ResponseEntity<>("There are no images that you generated.", HttpStatus.OK);
        }
        return new ResponseEntity<>(imageService.findImagesByEmail(email), HttpStatus.OK);
    }
    @PostMapping("/generate")
    public ResponseEntity<?> generateImage(@Valid @RequestBody ImageGenerationBody imageGenerationBody) {
        try {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String email = userDetails.getUsername();
            Utente utente = utenteService.getUtenteByEmail(email);
            int credit = utente.getCredit();
            if(credit < imageGenerationBody.getN()) {
                return new ResponseEntity<>("Credit is insufficient.", HttpStatus.OK);
            }

            // Create REST API template to generate AI images
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");
            headers.set("Authorization", "Bearer " + apiKey);
            HttpEntity<ImageGenerationBody> httpEntity = new HttpEntity<>(imageGenerationBody, headers);
            ResponseEntity<ImageResponse> responseEntity = restTemplate.postForEntity(apiUrl, httpEntity, ImageResponse.class);

            if(responseEntity.getStatusCode() != HttpStatus.OK) return new ResponseEntity<>("Failed to generate image.", HttpStatus.INTERNAL_SERVER_ERROR);

            utenteService.updateCredit(email, credit - imageGenerationBody.getN());
            List<ImageData> images = Objects.requireNonNull(responseEntity.getBody()).getData();
            for (ImageData image : images) {
                imageService.save(new Image(email, image.getUrl()));
            }
            return new ResponseEntity<>(responseEntity.getBody(), HttpStatus.OK);
        } catch(Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("Error!, Please try again!", HttpStatus.BAD_REQUEST);
        }
    }
}
