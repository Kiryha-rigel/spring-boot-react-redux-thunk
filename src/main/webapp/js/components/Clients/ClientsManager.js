import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

import addClientAction from '../../actions/clients'
import ClientItem from './ClientItem';
import NewClient from './NewClient';
import '../../../css/ItemManager.css';
import '../../../css/Item.css';

class ClientsManager extends Component{
    constructor(props){
        super(props);

        this.addClient = this.addClient.bind(this);
        this.collectClients = this.collectClients.bind(this);
    }

    addClient(client,succesHandler,errorHandler){
        this.props.addClient(client,succesHandler,errorHandler);
    }

    collectClients(){
        return this.props.clients.map(function(item){
            return(
                <Link key={item.idClient} className='Item-a-wrapper' to={`/clients/${item.idClient}/accounts`}>
                    <ClientItem {...item}/>
                </Link>
            )
        });
    }

    render(){
        return(
            <div className="ClientManager">
                <div className="ItemManager-head">
                    Клиенты
                </div>
                <div className="ItemManager-body">
                    <div className="ItemManager-body-head">
                        <div className="ItemManager-body-head-cell ClientItem-name">Имя</div>
                        <div className="ItemManager-body-head-cell ClientItem-age">Возраст</div>
                        <div className="ItemManager-body-head-cell ClientItem-address">Адрес</div>
                    </div>
                    <div className="ItemManager-body-list">
                            {this.collectClients()}
                            <NewClient onAddClient={this.addClient}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state=>({
        clients:state.clients
    }),
    dispatch=>({
        addClient:(client,succesHandler,errorHandler)=>{
            dispatch(addClientAction(client,succesHandler,errorHandler)/*{type:'ADD_CLIENT',payload:client}*/);
        }
    })
)(ClientsManager);