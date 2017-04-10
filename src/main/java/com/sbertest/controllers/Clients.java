package com.sbertest.controllers;

import com.sbertest.database.entity.ClientEntity;
import com.sbertest.main.wrappers.ClientWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
@RequestMapping("/clients")
public class Clients {
    @Autowired
    private ClientWrapper clientWrapper;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<ClientEntity>> getClients(){
        List<ClientEntity> answer = clientWrapper.getAllClients();

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Content-Type","application/javascript;charset=UTF-8");

        return (new ResponseEntity<>(answer,responseHeaders, HttpStatus.OK));
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<ClientEntity> addClient(@RequestBody ClientEntity client){

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Content-Type","application/javascript;charset=UTF-8");

        return (new ResponseEntity<>(clientWrapper.saveClient(client),responseHeaders, HttpStatus.OK));
    }

    /*@RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public ResponseEntity<List<ClientEntity>> delete(@PathVariable("id") Long id){

        List<ClientEntity> answer = null;

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Content-Type","application/javascript;charset=UTF-8");

        return (new ResponseEntity<>(answer,responseHeaders, HttpStatus.OK));
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    public ResponseEntity<List<ClientEntity>> deleteTest(@PathVariable("id") Long id){
        List<ClientEntity> answer = null;

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Access-Control-Allow-Origin", "*");
        responseHeaders.set("Content-Type","application/javascript;charset=UTF-8");

        return (new ResponseEntity<>(answer,responseHeaders, HttpStatus.OK));
    }

    @RequestMapping(value={"/{id}"},method = RequestMethod.OPTIONS)
    public ResponseEntity<?> option(){
        return new ResponseEntity<>(HttpStatus.OK);
    }*/
}
