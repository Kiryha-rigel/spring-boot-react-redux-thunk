package com.sbertest.database.services.impl;

import com.sbertest.database.entity.ClientEntity;
import com.sbertest.database.repository.ClientRepository;
import com.sbertest.database.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public List<ClientEntity> getClients(){
        return clientRepository.findAll();
    }

    public ClientEntity save(ClientEntity obj){
        return clientRepository.saveAndFlush(obj);
    }
}
