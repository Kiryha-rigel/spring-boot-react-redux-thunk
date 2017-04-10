import React,{Component} from 'react';
import Formsy,{Form} from 'formsy-react';

import CustomForm from '../elements/CustomForm';
import '../../../css/Accounts/AccountItem.css';

export default class NewClient extends Component{
    constructor(props){
        super(props);

        this.state={
            canSubmit: false
        }

        this.enableButton=this.enableButton.bind(this);
        this.disableButton=this.disableButton.bind(this);
        this.submit=this.submit.bind(this);
        this.addSucces=this.addSucces.bind(this);
        this.addError=this.addError.bind(this);
    }

    enableButton() {
        this.setState({
            canSubmit: true
        });
    }

    disableButton() {
        this.setState({
            canSubmit: false
        });
    }

    submit(model) {
        this.disableButton();
        model.idAccount=null;
        model.idClient=this.props.idClient;
        this.props.onAddAccount(model,this.addSucces,this.addError);
    }

    addSucces(){
        this.enableButton()
        this.refs.form.reset();
    }

    addError(){
        this.enableButton();
    }


    render() {
        return (
            <Form ref='form' onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <div className="Item">
                    <div className="Item-cell AccountItem-id"></div>
                    <CustomForm
                        className='AccountItem-amount'
                        name="amount"
                        title="Сумма"
                        validations={{
                            isNumeric: true,
                            minLength:1
                        }}
                        validationErrors={{
                            isNumeric: "В поле Сумма введено не числовое значение!",
                            minLength: "Поле Сумма не заполнено!"
                        }}
                        required />
                    <div>
                        <button className="NewItem-button" type="submit" disabled={!this.state.canSubmit}>Submit</button>
                    </div>
                </div>
            </Form>
        );
    }
}
