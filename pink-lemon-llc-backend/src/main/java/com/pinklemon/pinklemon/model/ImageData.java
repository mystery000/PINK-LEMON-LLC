package com.pinklemon.pinklemon.model;

public class ImageData {
    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return getUrl();
    }
}
