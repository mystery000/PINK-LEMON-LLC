package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.springframework.web.multipart.MultipartFile;

public class ImageEditRequest {
    private MultipartFile image;
    private MultipartFile mask;
    private String prompt;
    private String size;
    private String n;

    ImageEditRequest() {

    }
    ImageEditRequest(MultipartFile image, MultipartFile mask, String prompt, String size, String n) {
        this.image = image;
        this.mask = mask;
        this.prompt = prompt;
        this.size = size;
        this.n = n;
    }
    public void setImage(MultipartFile image) {
        this.image = image;
    }
    public MultipartFile getImage() {
        return image;
    }
    public void setMask(MultipartFile mask) {
        this.mask = mask;
    }
    public MultipartFile getMask() {
        return mask;
    }
    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }
    public String getPrompt() {
        return prompt;
    }
    public void setSize(String size) {
        this.size = size;
    }
    public String getSize() {
        return size;
    }
    public void setN(String n) {
        this.n = n;
    }
    public String getN() {
        return n;
    }
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("Image", getImage().toString())
                .append("Mask", getMask().toString())
                .append("Size", getSize())
                .append("Prompt", getPrompt())
                .append("N", getN())
                .toString();
    }
}
