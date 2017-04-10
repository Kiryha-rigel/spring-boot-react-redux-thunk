import React from 'react';
import ReactTestUtils from 'react-dom/lib/ReactTestUtils';
import ReactDOM from 'react-dom';

import NewAccount from '../../../js/components/Accounts/NewAccount';

describe('NewAccount.Test', () => {
    it('Проверка валидации формы', () => {
        const onClickSpy = jest.fn();
        const id = 1;

        const component = ReactTestUtils.renderIntoDocument(
            <NewAccount idClient={id} onAddAccount={onClickSpy}/>
        );
        var DomElement = ReactDOM.findDOMNode(component);


        let input = ReactTestUtils.findRenderedDOMComponentWithTag(component,'input');
        //input.setAttribute('value','150');
        ReactTestUtils.Simulate.change(input,{ currentTarget: { value: 145 }});
        //ReactTestUtils.Simulate.keypress(input, {key: "1", keyCode: 49, which: 49});
        //ReactTestUtils.Simulate.keyDown(input, {keyCode : 65});
        console.log(input.getAttribute('value'));

        const button = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'NewItem-button');
        ReactTestUtils.Simulate.click(button);

        expect(onClickSpy).toBeCalledWith({},component.addSucces,component.addError);
    });
});