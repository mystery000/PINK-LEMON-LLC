package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.constant.Constants;
import com.pinklemon.pinklemon.model.ConfirmationToken;
import com.pinklemon.pinklemon.repository.ConfirmationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class ConfirmationTokenService {
    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;

    public ConfirmationToken createConfirmationToken(String email) {
        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(email, token);
        confirmationTokenRepository.save(confirmationToken);
        return confirmationToken;
    }

    public ConfirmationToken findByConfirmationToken(String token) {
        return confirmationTokenRepository.findByConfirmationToken(token);
    }

    public void updateExpired(String token, Boolean expired) {
        ConfirmationToken confirmationToken = confirmationTokenRepository.findByConfirmationToken(token);
        confirmationToken.setExpired(expired);
        confirmationTokenRepository.save(confirmationToken);
    }

    public Boolean isExpired(ConfirmationToken confirmationToken) {
        if(confirmationToken.getExpired()) {
            return true;
        }

        Date currentTime = new Date();

        long pastTime = currentTime.getTime() - confirmationToken.getCreatedDate().getTime();

        if(pastTime > Constants.expireTime) {
            confirmationToken.setExpired(true);
            confirmationTokenRepository.save(confirmationToken);
            return true;
        }

        return false;
    }
    public Boolean existConfirmationToken(String confirmationToken) {
        return confirmationTokenRepository.existsConfirmationTokenByConfirmationToken(confirmationToken);
    }
}
