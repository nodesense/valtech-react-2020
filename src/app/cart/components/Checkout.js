import React from 'react';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            city: ''
        }

        // access to ref/dom element
        // firstNameElement.current availabel on componentDidMount
        this.firstNameElement = React.createRef();
    }

    handleChange = (event) => {
        // event object passed by event system
        console.log('handlechange', event);
        const target = event.target; // input/select real dom
        const {name, value} = target;
        console.log(name, value); 

        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        // current is real dom element
        // input.focus()
        this.firstNameElement.current.focus();
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <form>
                    Full Name
                    <input name="fullName"
                           type="text"  
                           value={this.state.fullName}
                           onChange={this.handleChange}
                           ref={this.firstNameElement}
                           />

                    <select name="city"
                            onChange={this.handleChange}
                    >
                        <option value="Bangalore">
                            Bangalore
                        </option>
                        <option value="Mysore">
                            Mysore
                        </option>
                        <option value="Chennai">
                            Chennai
                        </option>
                    </select>
                </form>
            </div>
        )
    }
}