package com.railwaySystem.railwayTicketing.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import com.railwaySystem.railwayTicketing.entity.users;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface userRepository extends JpaRepository<users,Integer> {
    List<users> findByEmailAndPassword(String username, String password);
}
