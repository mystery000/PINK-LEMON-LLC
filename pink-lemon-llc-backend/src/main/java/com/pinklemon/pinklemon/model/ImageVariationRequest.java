package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.web.multipart.MultipartFile;

public class ImageVariationRequest {
    private MultipartFile image;

    private String size;

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getSize() {
        return size;
    }

    public ImageVariationRequest() {

    }

    public ImageVariationRequest(MultipartFile image, String size) {
        this.image = image;
        this.size = size;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("File", getImage().toString())
                .append("Size", getSize())
                .toString();
    }
}
