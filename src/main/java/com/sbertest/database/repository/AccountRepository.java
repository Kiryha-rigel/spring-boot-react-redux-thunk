package com.sbertest.database.repository;

import com.sbertest.database.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity,Long> {
    public List<AccountEntity> getAccountEntitiesByIdClient(Long idClient);
}
