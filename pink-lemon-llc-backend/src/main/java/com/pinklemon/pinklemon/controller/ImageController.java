package com.pinklemon.pinklemon.controller;

import com.pinklemon.pinklemon.constant.OperationType;
import com.pinklemon.pinklemon.model.*;
import com.pinklemon.pinklemon.service.ImageService;
import com.pinklemon.pinklemon.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;
import com.pinklemon.pinklemon.utills.MultipartinputStreamFileResource;

@RestController
@RequestMapping("/api/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @Autowired
    private UserService userService;

    @Value("${openai.api-key}")
    private String apiKey;

    @GetMapping
    public ResponseEntity<?> findImagesByEmail() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = userDetails.getUsername();
        if(!imageService.existsImageByEmailIgnoreCase(email)) {
            return new ResponseEntity<>("There are no images that you generated.", HttpStatus.OK);
        }
        return new ResponseEntity<>(imageService.findImagesByEmailIgnoreCase(email), HttpStatus.OK);
    }
    @PostMapping("/generations")
    public ResponseEntity<?> generateImage(@Valid @RequestBody ImageGenerationRequest imageGenerationRequest) {
        try {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String email = userDetails.getUsername();
            User user = userService.getUserByEmailIgnoreCase(email);
            int credit = user.getCredit();
            if(credit < imageGenerationRequest.getN()) {
                return new ResponseEntity<>("Credit is insufficient.", HttpStatus.NOT_ACCEPTABLE);
            }

            // Create REST API template to generate AI images
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");
            headers.set("Authorization", "Bearer " + apiKey);
            HttpEntity<ImageGenerationRequest> httpEntity = new HttpEntity<>(imageGenerationRequest, headers);
            ResponseEntity<ImageResponse> responseEntity = restTemplate.postForEntity("https://api.openai.com/v1/images/generations", httpEntity, ImageResponse.class);

            if(responseEntity.getStatusCode() != HttpStatus.OK) return new ResponseEntity<>("Failed to generate image.", HttpStatus.INTERNAL_SERVER_ERROR);

            userService.updateCredit(email, credit - imageGenerationRequest.getN());
            List<ImageData> images = Objects.requireNonNull(responseEntity.getBody()).getData();
            for (ImageData image : images) {
                imageService.save(new Image(email, image.getUrl(), OperationType.GENERATION));
            }
            return new ResponseEntity<>(responseEntity.getBody(), HttpStatus.OK);
        } catch(Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>("Error!, Please try again!", HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/variations")
    public ResponseEntity<?> variateImage(@ModelAttribute ImageVariationRequest imageVariationRequest) {
        try {
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String email = userDetails.getUsername();
            User user = userService.getUserByEmailIgnoreCase(email);
            int credit = user.getCredit();
            if(credit < 1) {
                return new ResponseEntity<>("Credit is insufficient.", HttpStatus.NOT_ACCEPTABLE);
            }

            LinkedMultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
            map.add("image", new MultipartinputStreamFileResource(imageVariationRequest.getImage().getInputStream(), imageVariationRequest.getImage().getOriginalFilename()));

            // Create REST API template to variate AI images
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "multipart/form-data");
            headers.set("Authorization", "Bearer " + apiKey);

            HttpEntity<LinkedMultiValueMap<String, Object>> httpEntity = new HttpEntity<>(map, headers);
            ResponseEntity<ImageResponse> responseEntity = restTemplate.postForEntity("https://api.openai.com/v1/images/variations", httpEntity, ImageResponse.class);
            if(responseEntity.getStatusCode() != HttpStatus.OK) return new ResponseEntity<>("Failed to variate the image.", HttpStatus.INTERNAL_SERVER_ERROR);

            userService.updateCredit(email, credit - 1);
            List<ImageData> images = Objects.requireNonNull(responseEntity.getBody()).getData();
            for (ImageData image : images) {
                imageService.save(new Image(email, image.getUrl(), OperationType.VARIATION));
            }
            return new ResponseEntity<>(responseEntity.getBody(), HttpStatus.OK);
        } catch(Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/edits")
    public ResponseEntity<?> editImage(@ModelAttribute ImageEditRequest imageEditRequest) {
        try {
            System.out.println(imageEditRequest.toString());
            UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String email = userDetails.getUsername();
            User user = userService.getUserByEmailIgnoreCase(email);
            int credit = user.getCredit();
            if(credit < 1) {
                return new ResponseEntity<>("Credit is insufficient.", HttpStatus.NOT_ACCEPTABLE);
            }
            LinkedMultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
            map.add("image", new MultipartinputStreamFileResource(imageEditRequest.getImage().getInputStream(), imageEditRequest.getImage().getOriginalFilename()));
            map.add("mask", new MultipartinputStreamFileResource(imageEditRequest.getMask().getInputStream(), imageEditRequest.getMask().getOriginalFilename()));
            map.add("prompt", imageEditRequest.getPrompt());
            map.add("size", imageEditRequest.getSize());
            map.add("n", imageEditRequest.getN());

            // Create REST API template to variate AI images
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "multipart/form-data");
            headers.set("Authorization", "Bearer " + apiKey);
            HttpEntity<LinkedMultiValueMap<String, Object>> httpEntity = new HttpEntity<>(map, headers);

            ResponseEntity<ImageResponse> responseEntity = restTemplate.postForEntity("https://api.openai.com/v1/images/edits", httpEntity, ImageResponse.class);
            if(responseEntity.getStatusCode() != HttpStatus.OK) return new ResponseEntity<>("Failed to edit the image.", HttpStatus.INTERNAL_SERVER_ERROR);
            userService.updateCredit(email, credit - 1);
            List<ImageData> images = Objects.requireNonNull(responseEntity.getBody()).getData();
            for (ImageData image : images) {
                imageService.save(new Image(email, image.getUrl(), OperationType.EDIT));
            }
            return new ResponseEntity<>(responseEntity.getBody(), HttpStatus.OK);
        } catch (Exception ex) {
            ex.printStackTrace();
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}

