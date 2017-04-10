package com.sbertest.database.services;


import com.sbertest.database.entity.ClientEntity;

import java.util.List;

public interface ClientService {
    List<ClientEntity> getClients();
    ClientEntity save(ClientEntity obj);
}
