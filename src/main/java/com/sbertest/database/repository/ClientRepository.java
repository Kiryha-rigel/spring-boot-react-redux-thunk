package com.sbertest.database.repository;


import com.sbertest.database.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity,Long> {
    /*@Query("SELECT phone FROM PhoneNumberEntity phone WHERE phone.status IN (:status) AND phone.idServiceRelation!=null")
    public List<PhoneNumberEntity> getPhonesByStatus(@Param("status") List<Byte> status);*/
}
