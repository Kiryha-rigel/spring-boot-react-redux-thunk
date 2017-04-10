import React,{Component} from 'react';
import Formsy,{Form} from 'formsy-react';

import CustomForm from '../elements/CustomForm'
import '../../../css/Client/ClientItem.css'

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
        model.idClient=null;
        model.age = parseInt(model.age);
        this.props.onAddClient(model,this.addSucces,this.addError);
    }

    addSucces(){
        this.enableButton()
        this.refs.form.reset();
        console.log('addSucces()');
    }

    addError(){
        this.enableButton();
        console.log('addError()');
    }

    render() {
        return (
            <Form ref='form' onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <div className="Item">
                    <CustomForm className="ClientItem-name" name="name" title="Имя" validations="minLength:1" validationError="Поле имя не заполнено!" required/>
                    <CustomForm
                        className="ClientItem-age"
                        name="age"
                        title="Возраст"
                        validations={{
                            isNumeric: true,
                            minLength:1
                        }}
                        validationErrors={{
                            isNumeric: "В поле возраст введено не числовое значение!",
                            minLength: "Поле возраст не заполнено!"
                        }}
                        required />
                    <CustomForm className="ClientItem-address" name="address" title="Адрес" validations="minLength:5" validationError="Какой то больно короткий у вас адрес." required/>
                    <div>
                        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                    </div>
                </div>
            </Form>
        );
    }
}
