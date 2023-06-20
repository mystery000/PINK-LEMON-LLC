package com.pinklemon.pinklemon.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.hibernate.annotations.Comment;
import org.hibernate.validator.constraints.UniqueElements;

import java.util.Date;

@Entity
@Table(name = "images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Comment("Image Owner")
    private String email;

    @NotNull
    @Size(max = 600)
    @Comment("Images URL")
    private String url;

    @Comment("Deleted Image")
    private boolean deleted;

    @Comment("Creation Date")
    private Date create_time;

    public Image() {

    }
    public Image(@NotNull String email, @NotNull String url) {
        this.email = email;
        this.url = url;
        this.deleted = false;
        this.create_time = new Date();
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }
    public void setEmail(@NotNull String email) {
        this.email = email;
    }
    public @NotNull String getEmail() {
        return email;
    }
    public void setUrl(@NotNull String url) {
        this.url = url;
    }
    public @NotNull String getUrl() {
        return url;
    }
    public boolean getDeleted() {
        return deleted;
    }
    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
    public Date getCreateTime() {
        return create_time;
    }
    public void setCreateTime(Date create_time) {
        this.create_time = create_time;
    }
    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.MULTI_LINE_STYLE)
                .append("id", getId())
                .append("email", getEmail())
                .append("url", getUrl())
                .append("deleted", getDeleted())
                .append("createTime", getCreateTime())
                .toString();
    }
}