import React,{Component} from 'react';
import { browserHistory } from 'react-router';

import '../../../css/Client/ClientItem.css';
import "../../../css/Item.css";


export default class ClientItem extends Component{
    static propTypes = {
        idClient: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number.isRequired,
        address: React.PropTypes.string.isRequired,
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Item" key={this.props.idClient}>
                <div className="Item-cell ClientItem-name">{this.props.name}</div>
                <div className="Item-cell ClientItem-age">{this.props.age}</div>
                <div className="Item-cell ClientItem-address">{this.props.address}</div>
            </div>
        );
    }
}
