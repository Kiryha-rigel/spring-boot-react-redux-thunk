import axios from 'axios';


export function getAccountsAction(client){
    return dispatch => {
        axios.get('/accounts',{params:{idClient:client.idClient}})
            .then(function(response){
                dispatch({type:'GET_ACCOUNTS',payload:response.data});
            })
            .catch(function(response){
                console.error(response.statusText);
            });
    }
}

export function addAccountAction(account,succesHandler,errorHandler){
    return dispatch => {
        axios.put('/accounts',account)
            .then(function(response){
                dispatch({type:'ADD_ACCOUNT',payload:response.data});
                succesHandler===undefined || succesHandler();
            })
            .catch(function(response){
                errorHandler===undefined || errorHandler();
                console.error(response.statusText);
            });
    }

}