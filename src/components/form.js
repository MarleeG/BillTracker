import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Form extends Component {


    state = {
        showForm: false
    }

    handleSubmit = () => {
        this.setState({
            showForm: true,
            company: ''
        })
    }

    handleChange = (event) => {

        const {name, value} = event.target;

        this.setState({
            [name]: value
        }, () => console.log(`after state set => ${this.state.company}`))
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleSubmit} variant="primary">Add Bill</Button>

                { 
                    this.state.showForm &&  
                    <form>
                        <label>
                            Company:
                        <input type="text" name="company" onChange={this.handleChange}/>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                }
               
            </div>
        )
    }
}

export default Form;