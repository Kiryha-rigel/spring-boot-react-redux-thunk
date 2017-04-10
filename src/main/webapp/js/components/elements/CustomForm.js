import React from 'react';
import Formsy from 'formsy-react';

import '../../../css/Item.css';

const CustomForm = React.createClass({

    mixins: [Formsy.Mixin],

    changeValue(event) {
        this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    },
    render() {
        /*const className = 'form-group' + (this.props.className || ' ') +
            (this.showRequired() ? 'required' : this.showError() ? 'error' : '');*/
        const errorMessage = this.getErrorMessage();
        //<!--<label htmlFor={this.props.name}>{this.props.title}</label>-->
        return (
            <div className={`Item-cell ${this.props.className}`}>
                <input
                    type={this.props.type || 'text'}
                    name={this.props.name}
                    placeholder={this.props.title}
                    onChange={this.changeValue}
                    value={this.getValue() || ''}
                    checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
                />
                <div className='validation-error'>{errorMessage}</div>
            </div>
        );
    }
});

export default CustomForm;