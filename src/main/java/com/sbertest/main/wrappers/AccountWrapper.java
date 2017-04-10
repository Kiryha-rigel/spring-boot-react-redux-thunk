package com.sbertest.main.wrappers;

import com.sbertest.database.entity.AccountEntity;
import com.sbertest.database.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountWrapper {
    @Autowired
    private AccountService accountService;

    public List<AccountEntity> getAccountsByIdClient(Long idClient){
        return accountService.getAccountsByIdClient(idClient);
    }

    public AccountEntity saveAccount(AccountEntity obj){
        return accountService.save(obj);
    }
}
