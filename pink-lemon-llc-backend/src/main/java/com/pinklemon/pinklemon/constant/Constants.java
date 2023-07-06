package com.pinklemon.pinklemon.constant;

import io.jsonwebtoken.Claims;

/**
 * Common Constants
 *
 * @author Mohamed
 */
public class Constants
{
    /**
     * Confirmation Token expire time
     */
    public static final int expireTime = 2 * 60 * 60 * 1000; // 1 hour

    /**
     * UTF-8 character set
     */
    public static final String UTF8 = "UTF-8";

    /**
     * http request
     */
    public static final String HTTP = "http://";

    /**
     * https request
     */
    public static final String HTTPS = "https://";

    /**
     * Universal Success Indicator
     */
    public static final String SUCCESS = "0";

    /**
     * Generic failure flag
     */
    public static final String FAIL = "1";

    /**
     * login successful
     */
    public static final String LOGIN_SUCCESS = "Success";

    /**
     * Logout
     */
    public static final String LOGOUT = "Logout";

    /**
     * Register
     */
    public static final String REGISTER = "Register";

    /**
     * Login failed
     */
    public static final String LOGIN_FAIL = "Error";

    /**
     * token
     */
    public static final String TOKEN = "token";

    /**
     * token prefix
     */
    public static final String TOKEN_PREFIX = "Bearer ";

    /**
     * user id
     */
    public static final String JWT_USERID = "userid";

    /**
     * username
     */
    public static final String JWT_USERNAME = Claims.SUBJECT;

    /**
     * email
     */
    public static final String JWT_EMAIL = "email";

    /**
     * creation time
     */
    public static final String JWT_CREATED = "created";

    /**
     * authorities
     */
    public static final String JWT_AUTHORITIES = "authorities";

}