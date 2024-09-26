"use strict";

class SignUpForm extends React.Component {
    
    state = {};

    elements = [
        React.createElement('h1', {key: 'h1'}, 'Anmäl till Danslektion'),
        React.createElement(
            'form',
            {key: 'form1'},
            React.createElement('label', null, 'Namn'),
            React.createElement('input', {type: 'text'}, null),
            React.createElement('br', null, null),
            React.createElement('label', null, 'Email'),
            React.createElement('input', {type: 'text'}, null),
            React.createElement('br', null, null),
            React.createElement('button', null, 'Skicka'),
        )
    ];

    constructor(props) {
        super(props);
        this.state.props = props;
    }

    render() {
        return React.createElement('div', {style: {display: 'flex', flexDirection: 'column', alignItems: 'center'}}, this.elements);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement(SignUpForm, null, null)
);