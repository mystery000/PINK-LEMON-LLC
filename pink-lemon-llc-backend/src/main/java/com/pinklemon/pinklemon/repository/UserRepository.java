package com.pinklemon.pinklemon.repository;

import com.pinklemon.pinklemon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Boolean existsByEmailIgnoreCase(String email);

    User getUserByEmailIgnoreCase(String email);

}