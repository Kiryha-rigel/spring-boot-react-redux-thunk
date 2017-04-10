package com.sbertest.controllers;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@RequestMapping("/test")
public class testDoubleBaseController
{
    @Resource
    private Environment env;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public String getCDRs()
    {
        return env.getRequiredProperty("elcir.db.password");
    }

    /*@RequestMapping(value = "/request",method = RequestMethod.GET)
    @ResponseBody
    public String getRequest() throws Exception {
        return GETRequestAnother();
    }

    @RequestMapping(value = "/report",method = RequestMethod.GET)
    @ResponseBody
    public String getPeport()
    {
        HtmlWorker w = new HtmlWorker();
        return w.createTable(billAnalizer.getCDRs());//billAnalizer.printCDRs();
    }

    public String GETRequest(){
        String answer = "";

        String url = "http://127.0.0.1/Accounting1/hs/ElBit/bills/";

        HttpClient client = HttpClientBuilder.create().build();
        HttpGet request = new HttpGet(url);

        // add request header
        request.addHeader(BasicScheme.authenticate(new UsernamePasswordCredentials("ElBit_HS_handler", "12345"),"UTF-8", false));
        request.addHeader("User-Agent", "Mozilla/5.0");
        HttpResponse response = null;
        try {
            response = client.execute(request);

            System.out.println("Response Code : "
                    + response.getStatusLine().getStatusCode());

            BufferedReader rd = new BufferedReader(
                    new InputStreamReader(response.getEntity().getContent()));

            StringBuffer result = new StringBuffer();
            String line = "";
            while ((line = rd.readLine()) != null) {
                result.append(line);
            }

            answer = result.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return answer;
    }

    public String GETRequestAnother() throws Exception {
        String answer = "";
        HttpHost target = new HttpHost("127.0.0.1", 80, "http");
        CredentialsProvider credsProvider = new BasicCredentialsProvider();
        credsProvider.setCredentials(
                new AuthScope(target.getHostName(), target.getPort()),
                new UsernamePasswordCredentials("ElBit_HS_handler", "12345"));

        HttpClient httpclient = HttpClientBuilder.create().setDefaultCredentialsProvider(credsProvider).build();
        AuthCache authCache = new BasicAuthCache();
        BasicScheme basicAuth = new BasicScheme();
        authCache.put(target, basicAuth);

        HttpClientContext localContext = HttpClientContext.create();
        localContext.setAuthCache(authCache);

        HttpGet httpget = new HttpGet("http://127.0.0.1/Accounting1/hs/ElBit/bills/");

        System.out.println("Executing request " + httpget.getRequestLine() + " to target " + target);
        HttpResponse response = null;

        try {
            response = httpclient.execute(target, httpget, localContext);

            System.out.println("Response Code : "+ response.getStatusLine().getStatusCode());

            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));

            StringBuffer result = new StringBuffer();
            String line = "";
            while ((line = rd.readLine()) != null) {
                result.append(line);
            }

            answer = result.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return answer;
    }*/
}
