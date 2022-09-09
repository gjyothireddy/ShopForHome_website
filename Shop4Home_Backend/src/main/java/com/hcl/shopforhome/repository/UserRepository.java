package com.hcl.shopforhome.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.hcl.shopforhome.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}
