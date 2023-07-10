package com.pinklemon.pinklemon.utills;

import org.springframework.core.io.InputStreamResource;

import java.io.InputStream;

public class MultipartinputStreamFileResource extends InputStreamResource {
    private final String filename;

    public MultipartinputStreamFileResource(InputStream inputStream, String filename) {
        super(inputStream);
        this.filename = filename;
    }

    @Override
    public String getFilename() {
        return this.filename;
    }

    @Override
    public long contentLength() {
        return -1;
    }
}