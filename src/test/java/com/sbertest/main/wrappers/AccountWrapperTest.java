package com.sbertest.main.wrappers;

import com.google.common.collect.ImmutableList;
import com.sbertest.database.entity.AccountEntity;
import com.sbertest.database.services.AccountService;
import com.sbertest.main.wrappers.AccountWrapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.List;

import static org.mockito.Matchers.anyLong;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class AccountWrapperTest {
    @Mock
    private AccountService accountService;
    @InjectMocks
    private AccountWrapper sut;

    @Test
    public void getListOfAccounts() throws Exception{
        when(accountService.getAccountsByIdClient(anyLong())).thenReturn(ImmutableList.of());

        List<AccountEntity> accounts = sut.getAccountsByIdClient((long) 15);

        verify(accountService).getAccountsByIdClient(anyLong());
    }
}
