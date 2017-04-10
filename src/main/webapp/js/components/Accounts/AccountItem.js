import React,{Component} from 'react';
import "../../../css/Accounts/AccountItem.css";
import "../../../css/Item.css";


export default class AccountItem extends Component{
    static propTypes={
        idAccount:React.PropTypes.number.isRequired,
        amount:React.PropTypes.number.isRequired
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Item">
                <div className="Item-cell AccountItem-id">{this.props.idAccount}</div>
                <div className="Item-cell AccountItem-amount">{this.props.amount} руб.</div>
            </div>
        )
    }
}

