package com.pinklemon.pinklemon.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Index Controller
 */
@RestController
@RequestMapping("/api")
public class IndexController {
    /**
     * API Entrypoint to PINK LEMON LLC
     */
    @RequestMapping
    public String Index() {
        return "This is API entrypoint to Pink Lemon LLC";
    }
}
