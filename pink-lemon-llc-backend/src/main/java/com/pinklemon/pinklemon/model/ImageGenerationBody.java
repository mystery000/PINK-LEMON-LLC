package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

public class ImageGenerationBody {
    private String prompt;
    private int n;
    private String size;

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }
    public String getPrompt() {
        return prompt;
    }
    public void setN(int n) {
        this.n = n;
    }
    public int getN() {
        return n;
    }
    public void setSize(String size) {
        this.size = size;
    }
    public String getSize() {
        return size;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("Prompt", getPrompt())
                .append("N", getN())
                .append("Size", getSize())
                .toString();
    }
}
