/* global $ */
import React from 'react'
import ReactDOM from 'react-dom'
import {Component} from 'react'
import {Button} from '@material-ui/core'

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: "ssss",
        };
    }
    render() {
        return (
            <div>
                <p>I am the Profile! wooow</p>
                <Button onClick={() => this.setState({value: 'X'})} variant="contained"> {this.state.value}</Button>
                <input id={"ex1"} type="text"/>
            </div>

        );
    }
    componentDidMount(){
        const node = ReactDOM.findDOMNode(this);
        console.log( $(node))
        $(document).ready(function() {
            $(node).children("#ex1").pDatepicker();
        });

    }
}
export default Profile;