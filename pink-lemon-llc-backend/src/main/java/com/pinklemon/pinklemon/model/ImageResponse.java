package com.pinklemon.pinklemon.model;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;

import java.util.List;

public class ImageResponse {
    private long created;
    private List<ImageData> data;

    public void setCreated(long created) {
        this.created = created;
    }

    public long getCreated() {
        return created;
    }

    public void setData(List<ImageData> data) {
        this.data = data;
    }

    public List<ImageData> getData() {
        return data;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("Created", getCreated())
                .append("data", getData())
                .toString();
    }
}

