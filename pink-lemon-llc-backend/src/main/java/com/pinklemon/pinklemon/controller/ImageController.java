package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.model.Image;
import com.pinklemon.pinklemon.model.ImageGernerationBody;
import com.pinklemon.pinklemon.model.Utente;
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
    public ResponseEntity<?> generateImage(@Valid @RequestBody ImageGernerationBody imageGernerationBody) {
        try {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String email = userDetails.getUsername();
            Utente utente = utenteService.getUtenteByEmail(email);
            int credit = utente.getCredit();
            if(credit < imageGernerationBody.getN()) {
                return new ResponseEntity<>("Credit is insufficient.", HttpStatus.OK);
            }
            // Generate AI images
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");
            headers.set("Authorization", "Bearer " + apiKey);
            HttpEntity<ImageGernerationBody> httpEntity = new HttpEntity<>(imageGernerationBody, headers);
            ResponseEntity<Object> responseEntity = restTemplate.postForEntity(apiUrl, httpEntity, Object.class);
            if(responseEntity.getStatusCode() != HttpStatus.OK) return new ResponseEntity<>("Failed to generate image.", HttpStatus.INTERNAL_SERVER_ERROR);
            utenteService.updateCredit(email, credit - imageGernerationBody.getN());
            return new ResponseEntity<>(responseEntity.getBody(), HttpStatus.OK);
        } catch(Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("Error!, Please try again!", HttpStatus.BAD_REQUEST);
        }
    }
}
