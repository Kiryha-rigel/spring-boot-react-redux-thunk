import React,{Component} from 'react';
import {connect} from 'react-redux';

import {getAccountsAction,addAccountAction} from '../../actions/accounts';
import AccountItem from './AccountItem';
import NewAccount from './NewAccount';
import "../../../css/Accounts/AccountsManager.css";
import "../../../css/Accounts/AccountItem.css";


class AccountsManager extends Component{
    constructor(props){
        super(props);
        this.state = {
            idClient:this.props.ownProps.params.id
        }
        this.initial();

        this.addAccount=this.addAccount.bind(this);
    }

    initial(){
        this.props.getAccounts(this.state);
    }

    addAccount(account,succesHandler,errorHandler){
        this.props.addAccount(account,succesHandler,errorHandler);
    }

    collectAccounts(){
        return this.props.accounts.map(function(item){
            return(
                <AccountItem key={item.idAccount} {...item}/>
            )
        });
    }

    render(){
        return(
            <div className="ClientManager">
                <div className="ItemManager-head">
                    Счета
                </div>
                <div className="ItemManager-body">
                    <div className="ItemManager-body-head">
                        <div className="ItemManager-body-head-cell AccountItem-id">Счет №</div>
                        <div className="ItemManager-body-head-cell AccountItem-amount">Сумма</div>
                    </div>
                    <div className="ItemManager-body-list">
                        {this.collectAccounts()}
                        <NewAccount idClient={this.state.idClient} onAddAccount={this.addAccount}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state,ownProps) => ({
        accounts : state.accounts,
        ownProps : ownProps
    }),
    dispatch => ({
        getAccounts:(client)=>{
            dispatch(getAccountsAction(client));
        },
        addAccount:(account,succesHandler,errorHandler)=>{
            dispatch(addAccountAction(account,succesHandler,errorHandler));
        }
    })
)(AccountsManager)
