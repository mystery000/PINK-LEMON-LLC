package com.pinklemon.pinklemon.service;

import com.pinklemon.pinklemon.model.User;
import com.pinklemon.pinklemon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public void save(User user) {
        userRepository.save(user);
    }

    public boolean existsByEmailIgnoreCase(String email) {
        return userRepository.existsByEmailIgnoreCase(email);
    }

    public User getUserByEmailIgnoreCase(String email) {
        return userRepository.getUserByEmailIgnoreCase(email);
    }

    public void updateCredit(String email, int credits) {
        User user = userRepository.getUserByEmailIgnoreCase(email);
        user.setCredit(credits);
        userRepository.save(user);
    }

    public void updatePassword(String email, String password) {
        User user = userRepository.getUserByEmailIgnoreCase(email);
        final String encodePassword = bCryptPasswordEncoder.encode(password);
        user.setPassword(encodePassword);
        userRepository.save(user);
    }

    public void updateEnabled(String email, Boolean enabled) {
        User user = userRepository.getUserByEmailIgnoreCase(email);
        user.setEnabled(enabled);
        userRepository.save(user);
    }

    public void updateVerificationLimit(String email, int limits) {
        User user = userRepository.getUserByEmailIgnoreCase(email);
        user.setVerificationLimit(limits);
        userRepository.save(user);
    }

}
