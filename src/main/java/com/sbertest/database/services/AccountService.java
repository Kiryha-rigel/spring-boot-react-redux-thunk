package com.sbertest.database.services;


import com.sbertest.database.entity.AccountEntity;

import java.util.List;

public interface AccountService {
    List<AccountEntity> getAccountsByIdClient(Long idClient);
    AccountEntity save(AccountEntity obj);
}
