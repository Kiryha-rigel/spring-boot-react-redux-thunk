package com.sbertest.database.services.impl;

import com.sbertest.database.entity.AccountEntity;
import com.sbertest.database.repository.AccountRepository;
import com.sbertest.database.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService{
    @Autowired
    private AccountRepository accountRepository;

    public List<AccountEntity> getAccountsByIdClient(Long idClient){
        return accountRepository.getAccountEntitiesByIdClient(idClient);
    }

    public AccountEntity save(AccountEntity obj){
        return accountRepository.saveAndFlush(obj);
    }
}
