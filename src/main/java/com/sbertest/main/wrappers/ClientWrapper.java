package com.sbertest.main.wrappers;

import com.sbertest.database.entity.AccountEntity;
import com.sbertest.database.entity.ClientEntity;
import com.sbertest.database.services.AccountService;
import com.sbertest.database.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Service
public class ClientWrapper {
    @Autowired
    private ClientService clientService;

    public List<ClientEntity> getAllClients(){
        return clientService.getClients();
    }

    public ClientEntity saveClient(ClientEntity client){
        return clientService.save(client);
    }
}
