package com.sbertest.controllers;

import com.sbertest.database.entity.AccountEntity;
import com.sbertest.main.wrappers.AccountWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/accounts")
public class Accounts {
    @Autowired
    AccountWrapper accountWrapper;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<AccountEntity>> getAccountsById(
            @RequestParam(value = "idClient",required = true) Long idClient){
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Content-Type","application/javascript;charset=UTF-8");

        return (new ResponseEntity<>(accountWrapper.getAccountsByIdClient(idClient),responseHeaders, HttpStatus.OK));
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<AccountEntity> addAccount(@RequestBody AccountEntity account){


        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Content-Type","application/javascript;charset=UTF-8");

        return (new ResponseEntity<>(accountWrapper.saveAccount(account),responseHeaders, HttpStatus.OK));
    }


}
