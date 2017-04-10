import axios from 'axios';


export default function addClientAction(client,succesHandler,errorHandler) {
    return dispatch=>{
        axios.put('/clients',client)
            .then(function(response){
                dispatch({type:'ADD_CLIENT',payload:response.data});
                succesHandler===undefined || succesHandler();
            })
            .catch(function(response){
                errorHandler===undefined || errorHandler();
                console.error(response.statusText);
            });
    }
}
